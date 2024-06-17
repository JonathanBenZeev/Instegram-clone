import { useState, ChangeEvent, useEffect } from 'react'
import { storyService } from '../services/story.service'
// import { CreatePost } from './CreatePost'
import { DynamicPostStage } from './DynamicPostStage'
import { uploadImg } from '../services/upload.service'
import { CreatePostStage } from '../shared/type'
import { useSelector } from 'react-redux'
import { RootState } from '../store/store'
import { BackSvg } from './shared/Svg'
import { addStory } from '../store/actions/story/story.actions'
import { ProgressLoader } from './ProgressLoader'
import { updateUser } from '../store/actions/user/user.actions'
export interface CreatePostModalProps {
  changeModalWidth: (modalWidth: string) => void
  onCloseDynamicModal: () => void
}

export const CreatePostModal = ({
  changeModalWidth,
  onCloseDynamicModal,
}: CreatePostModalProps) => {
  const [postStage, setPostStage] = useState<CreatePostStage>(
    CreatePostStage.UploadImgStage
  )
  const user = useSelector((state: RootState) => state.userModule.loggedInUser)
  const [post, setPost] = useState(storyService.getDefaultPost())
  const [isLoading, setIsLoading] = useState<boolean>(false)

  useEffect(() => {
    if (!user) return
    const by = {
      username: user?.username,
      imgUrl: user?.imgUrl,
      fullname: user?.fullname,
      _id: user?._id,
    }
    setPost((prevState) => ({ ...prevState, by }))
  }, [])

  useEffect(() => {
    if (postStage === CreatePostStage.DescCreateStage) changeModalWidth('860px')
  }, [postStage])

  const handelChange = ({
    target,
  }: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void => {
    const { value } = target
    const { name: field } = target

    setPost((prevPost) => ({ ...prevPost, [field]: value }))
  }

  const handelImg = async (imgFile: File) => {
    setIsLoading(true)
    const imgUrl = await uploadImg(imgFile)
    setIsLoading(false)
    onHandleStage(CreatePostStage.DescCreateStage)
    setPost((prevPost) => ({ ...prevPost, imgUrl }))
    changeModalWidth('860px')
  }

  function onHandleStage(value: CreatePostStage) {
    setPostStage(value)
  }

  const sharePost = async () => {
    const newPost = await addStory(post)
    if (newPost) user?.myStoryIds.push(newPost._id)
    await updateUser(user!)
    onCloseDynamicModal()
  }

  const getBack = () => {
    if (postStage) {
      onHandleStage(postStage - 1)
      changeModalWidth('520px')
    }
  }

  return (
    <div
      className={`create-post-modal ${postStage === CreatePostStage.DescCreateStage ? 'desc-header' : ''
        }`}
    >
      <header>
        <span className='back-arrow' onClick={getBack}>
          {postStage === CreatePostStage.DescCreateStage && <BackSvg />}
        </span>
        <h1>Create new post</h1>
        <span className='share-btn' onClick={sharePost}>
          {postStage === CreatePostStage.DescCreateStage && 'Share'}
        </span>
      </header>
      {isLoading ? (
        <ProgressLoader />
      ) : (
        <DynamicPostStage
          handelImg={handelImg}
          postStage={postStage}
          handelChange={handelChange}
          onHandleStage={onHandleStage}
          post={post}
        />
      )}
    </div>
  )
}
