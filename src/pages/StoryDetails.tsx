import { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { storyService } from '../services/story.service'
import { Story } from '../interfaces/story'
import { PostComments } from '../cmps/PostComments'
import { ActionSvg, ExitSvg } from '../cmps/Svg'
import { ActionModal } from '../cmps/ActionModal'
import { ActionPost } from '../cmps/ActionPost'
import { useSelector } from 'react-redux'
import { RootState } from '../store/store'
import { updateStory } from '../store/actions/story/story.actions'

export const StoryDetails = () => {
  const { storyId } = useParams()
  const navigate = useNavigate()
  const [story, setStory] = useState<Story | null>(null)
  const user = useSelector((state: RootState) => state.userModule.loggedInUser)

  const [isModalOpen, setIsModalOpen] = useState(false)

  useEffect(() => {
    loadStory()
  }, [storyId])

  const loadStory = async () => {
    if (!storyId) return
    try {
      const story = await storyService.getById(storyId)
      setStory(story)
    } catch (err) {
      navigate('/post')
    }
  }

  async function onSaveStory(story: Story) {
    await updateStory(story)
  }
  const onCloseModal = () => {
    setIsModalOpen(false)
  }

  const getBackHome = () => {
    navigate('/post')
  }

  if (!story) return <h1>Loader...</h1>
  console.log(story)

  const { by, comments } = story
  return (
    <>
      {isModalOpen && (
        <ActionModal fromDetails={true} onCloseModal={onCloseModal} />
      )}
      <section className='story-details-wrapper' onClick={getBackHome}>
        <span onClick={getBackHome} className='exit-details'>
          <ExitSvg />
        </span>
        <section
          className='story-details'
          onClick={(ev) => ev.stopPropagation()}
        >
          <div className='img-container'>
            <img src={story?.imgUrl} alt='post-img' />
          </div>
          <div className='comments-container'>
            <header className='post-header'>
              <div className='by-user'>
                <img src={by?.imgUrl} alt='profile' />
                <Link to={by!.username} className='story-user-name link'>
                  {by?.username}
                </Link>
              </div>
              <span className='action-btn' onClick={() => setIsModalOpen(true)}>
                <ActionSvg />
              </span>
            </header>
            <main className='post-body'>
              <div className='post-title'>
                <img src={by?.imgUrl} alt='profile' />
                <section className='by-title'>
                  <span className='user'>{by?.username}</span>&nbsp;
                  <span className='title'>{story.txt}</span>
                  <div className='time'>
                    <time>1h</time>
                  </div>
                </section>
              </div>
              <PostComments comments={comments} />
            </main>
            <footer className='post-footer'>
              <ActionPost onSaveStory={onSaveStory} user={user} story={story} />
            </footer>
          </div>
        </section>
      </section>
    </>
  )
}
