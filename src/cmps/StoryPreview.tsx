// import { Link } from 'react-router-dom'

import { AiOutlineHeart } from 'react-icons/ai'
import { Link } from 'react-router-dom'
import { Story } from '../interfaces/story.ts'
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

        <svg
          onClick={() => onRemoveStory(story._id)}
          aria-label='More options'
          color='#262626'
          fill='#262626'
          height='24'
          role='img'
          viewBox='0 0 24 24'
          width='24'
        >
          <circle cx='12' cy='12' r='1.5'></circle>
          <circle cx='6' cy='12' r='1.5'></circle>
          <circle cx='18' cy='12' r='1.5'></circle>
        </svg>
      </div>
      <div className='img-container'>
        <img src={story.imgUrl} alt='' />
      </div>
      <section className='actions-container'>
        <div className='left-actions'>
          <span>
            <svg
              aria-label='Like'
              className='x1lliihq x1n2onr6 xyb1xck'
              fill='currentColor'
              height='24'
              role='img'
              viewBox='0 0 24 24'
              width='24'
            >
              <title>Like</title>
              <path d='M16.792 3.904A4.989 4.989 0 0 1 21.5 9.122c0 3.072-2.652 4.959-5.197 7.222-2.512 2.243-3.865 3.469-4.303 3.752-.477-.309-2.143-1.823-4.303-3.752C5.141 14.072 2.5 12.167 2.5 9.122a4.989 4.989 0 0 1 4.708-5.218 4.21 4.21 0 0 1 3.675 1.941c.84 1.175.98 1.763 1.12 1.763s.278-.588 1.11-1.766a4.17 4.17 0 0 1 3.679-1.938m0-2a6.04 6.04 0 0 0-4.797 2.127 6.052 6.052 0 0 0-4.787-2.127A6.985 6.985 0 0 0 .5 9.122c0 3.61 2.55 5.827 5.015 7.97.283.246.569.494.853.747l1.027.918a44.998 44.998 0 0 0 3.518 3.018 2 2 0 0 0 2.174 0 45.263 45.263 0 0 0 3.626-3.115l.922-.824c.293-.26.59-.519.885-.774 2.334-2.025 4.98-4.32 4.98-7.94a6.985 6.985 0 0 0-6.708-7.218Z'></path>
            </svg>
          </span>
          <span>
            <svg
              aria-label='Comment'
              className='x1lliihq x1n2onr6 x5n08af'
              fill='currentColor'
              height='24'
              role='img'
              viewBox='0 0 24 24'
              width='24'
            >
              <title>Comment</title>
              <path
                d='M20.656 17.008a9.993 9.993 0 1 0-3.59 3.615L22 22Z'
                fill='none'
                stroke='currentColor'
                stroke-linejoin='round'
                stroke-width='2'
              ></path>
            </svg>
          </span>
          <span>
            <svg
              aria-label='Share Post'
              className='x1lliihq x1n2onr6 x5n08af'
              fill='currentColor'
              height='24'
              role='img'
              viewBox='0 0 24 24'
              width='24'
            >
              <title>Share Post</title>
              <line
                fill='none'
                stroke='currentColor'
                stroke-linejoin='round'
                stroke-width='2'
                x1='22'
                x2='9.218'
                y1='3'
                y2='10.083'
              ></line>
              <polygon
                fill='none'
                points='11.698 20.334 22 3.001 2 3.001 9.218 10.084 11.698 20.334'
                stroke='currentColor'
                stroke-linejoin='round'
                stroke-width='2'
              ></polygon>
            </svg>
          </span>
        </div>
        <div className='right-action'>
          <span>
            <svg
              aria-label='Save'
              className='x1lliihq x1n2onr6 x5n08af'
              fill='currentColor'
              height='24'
              role='img'
              viewBox='0 0 24 24'
              width='24'
            >
              <title>Save</title>
              <polygon
                fill='none'
                points='20 21 12 13.44 4 21 4 3 20 3 20 21'
                stroke='currentColor'
                stroke-linecap='round'
                stroke-linejoin='round'
                stroke-width='2'
              ></polygon>
            </svg>
          </span>
        </div>
        {/* <button onClick={() => onRemoveStory(story._id)}>X</button> */}
        {/* <Link to={`/story/edit/${story._id}`}>Edit</Link> */}
      </section>
    </article>
  )
}
