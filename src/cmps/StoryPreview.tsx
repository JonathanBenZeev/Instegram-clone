import { Link } from 'react-router-dom'

import { Story } from '../interfaces/story.ts'
import { HeartSvg, MessageSvg, PostSvg, SaveSvg, ActionSvg } from './Svg'
export interface StoryPreviewProps {
  story: Story
  onRemoveStory: (storyId: string) => Promise<void>
}
export function StoryPreview({ story, onRemoveStory }: StoryPreviewProps) {
  console.log('story:', story)

  const { by } = story
  return (
    <article className='story-preview'>
      <div className='story-header'>
        <div className='by-user'>
          <img src={by.imgUrl} alt='profile' />
          <Link to={by.fullname} className='story-user-name link'>
            {by.fullname}
          </Link>
          <div className='time'>
            <span>•</span>
            <time>1h</time>
          </div>
        </div>
        <span onClick={() => onRemoveStory(story._id)}>
          <ActionSvg />
        </span>
      </div>
      <div className='img-container'>
        <img src={story.imgUrl} alt='' />
      </div>
      <section className='actions-container'>
        <div className='start-actions'>
          <span>
            <HeartSvg />
          </span>
          <span>
            <MessageSvg />
          </span>
          <span>
            <PostSvg />
          </span>
        </div>
        <div className='end-actions'>
          <span>
            <SaveSvg />
          </span>
        </div>
      </section>
      <div className='likes'>
        <span>{story.likedBy.length}</span>
        <p>likes</p>
      </div>
      <div className='post-headline'>
        <span className='story-name'>{by.fullname}</span>
        <span className='story-txt'>{story.txt}</span>
      </div>
    </article>
  )
}
