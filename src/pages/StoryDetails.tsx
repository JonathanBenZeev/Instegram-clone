import { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { storyService } from '../services/story.service'
import { Story } from '../interfaces/story'
import { PostComments } from '../cmps/PostComments'
import { ActionSvg, ExitSvg } from '../cmps/Svg'

export const StoryDetails = () => {
  const { storyId } = useParams()
  const navigate = useNavigate()
  const [story, setStory] = useState<Story | null>(null)

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

  const getBackHome = () => {
    navigate('/post')
  }

  if (!story) return <h1>Loader...</h1>
  console.log(story)

  const { by, comments, imgUrl } = story
  return (
    <section className='story-details-wrapper' onClick={getBackHome}>
      <span onClick={getBackHome} className='exit-details'>
        <ExitSvg />
      </span>
      <section className='story-details' onClick={(ev) => ev.stopPropagation()}>
        <div className='img-container'>
          <img src={story?.imgUrl} alt='post-img' />
        </div>
        <div className='comments-container'>
          <header className='post-header'>
            <div className='by-user'>
              <img src={by.imgUrl} alt='profile' />
              <Link to={by.username} className='story-user-name link'>
                {by.username}
              </Link>
            </div>
            <span>
              <ActionSvg />
            </span>
          </header>
          <main className='post-body'>
            <div className='post-title'>
              <img src={by.imgUrl} alt='profile' />
              <section className='by-title'>
                <span className='user'>{by.username}</span>&nbsp;
                <span className='title'>{story.txt}</span>
                <div className='time'>
                  <time>1h</time>
                </div>
              </section>
            </div>
            <PostComments comments={story.comments} />
          </main>
          <footer className='post-footer'>fotter</footer>
        </div>
      </section>
    </section>
  )
}
