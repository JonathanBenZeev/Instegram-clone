import { FC } from 'react'
import { StoryPreview } from './StoryPreview'
import { Story } from '../interfaces/story'

export interface StoryListProps {
  stories: Story[]
  onRemoveStory: (storyId: string) => Promise<void>
}

export const StoryList: FC<StoryListProps> = ({ stories, onRemoveStory }) => {
  return (
    <section className='story-list simple-cards-grid'>
      {stories.map((story) => (
        <StoryPreview
          onRemoveStory={onRemoveStory}
          key={story._id}
          story={story}
        />
      ))}
    </section>
  )
}
