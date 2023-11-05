import { Link } from 'react-router-dom'

import { Story } from '../interfaces/story.ts'
export interface StoryPreviewProps {
  story: Story
  onRemoveStory: (storyId: string) => Promise<void>
}
export function StoryPreview({ story, onRemoveStory }: StoryPreviewProps) {
  console.log('story:', story)

  return (
    <article  className='story-preview'>
      <Link to={`/story/${story._id}`} className='info'>
        <h2>{story.txt}</h2>
        {/* <h4>{story.type}</h4> */}
      </Link>
      <section className='actions'>
        <button onClick={() => onRemoveStory(story._id)}>X</button>
        <Link to={`/story/edit/${story._id}`}>Edit</Link>
      </section>
    </article>
  )
}
