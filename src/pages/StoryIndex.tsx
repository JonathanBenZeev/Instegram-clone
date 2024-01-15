import { useEffect, useState } from 'react'
import { StoryList } from '../cmps/StoryList'


import {
  loadStories,
  removeStory,
  updateStory,
} from '../store/actions/story/story.actions'
import { useSelector } from 'react-redux'
import { RootState } from '../store/store'
import { Story } from '../interfaces/story'
import { Outlet } from 'react-router-dom'
import { ActionModal } from '../cmps/shared/ActionModal'
import { DynamicModal } from '../cmps/DynamicModal'
import { MiniUser } from '../interfaces/user'
import { PreviewLoader } from '../cmps/shared/PreviewLoader'

export interface ModalType {
  isOpen: boolean
  modalTitle: string
}

export function StoryIndex() {

  const stories = useSelector((state: RootState) => state.storyModule.stories)
  const user = useSelector((state: RootState) => state.userModule.loggedInUser)
  const [likedByUser, setLikeByUser] = useState<MiniUser[] | null>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [dynamicModalProps, setDynamicModalProps] = useState<ModalType>({
    isOpen: false,
    modalTitle: 'Likes',
  })


  useEffect(() => {
    loadStories()
  }, [])

  async function onRemoveStory(storyId: string) {
    await removeStory(storyId)
  }
  async function onSaveStory(story: Story) {
    await updateStory(story)
  }

  const onCloseDynamicModal = () => {
    setDynamicModalProps((prevState) => ({ ...prevState, isOpen: false }))
  }
  const onOpenDynamicModal = () => {
    setDynamicModalProps((prevState) => ({ ...prevState, isOpen: true }))
  }
  const onOpenActionModal = () => {
    setIsModalOpen(true)
  }
  const onCloseActionModal = () => {
    setIsModalOpen(false)
  }
  const getLikedByStory = (likedByStory: MiniUser[]) => {
    setLikeByUser(likedByStory)
    onOpenDynamicModal()
  }

  if (!stories) return <PreviewLoader/>
  console.log(user)
 
  return (
    <section className='story-index'>
      {isModalOpen && <ActionModal onCloseModal={onCloseActionModal} />}
      {dynamicModalProps.isOpen && likedByUser && (
        <DynamicModal
          modalTitle={dynamicModalProps.modalTitle}
          onCloseDynamicModal={onCloseDynamicModal}
          likedByStory={likedByUser}
        />
        )}

   
      <StoryList
        onOpenModal={onOpenActionModal}
        onOpenLikesModal={onOpenDynamicModal}
        onRemoveStory={onRemoveStory}
        onSaveStory={onSaveStory}
        stories={stories}
        user={user}
        getLikedByStory={getLikedByStory}
      />
      <Outlet />
      {/* <div>Another thing</div> */}
    </section>
  )
}
