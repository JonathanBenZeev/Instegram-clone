import { FC } from 'react'
import { StoryPreview } from './StoryPreview'
import { Story } from '../interfaces/story'
import { User } from '../interfaces/user'

export interface StoryListProps {
  stories: Story[]
  user: User|null
  onRemoveStory: (storyId: string) => Promise<void>
  onSaveStory: (story: Story) => Promise<void>
}

export const StoryList: FC<StoryListProps> = ({ stories,user, onRemoveStory,onSaveStory }) => {
  return (
    <section className='story-list simple-cards-grid'>
      {stories.map((story) => (
        <StoryPreview
          onRemoveStory={onRemoveStory}
          onSaveStory={onSaveStory}
          key={story._id}
          story={story}
          user={user}
        />
      ))}
    </section>
  )
}
