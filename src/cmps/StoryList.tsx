import { FC } from 'react'
import { StoryPreview } from './StoryPreview'
import { Story } from '../interfaces/story'
import { User } from '../interfaces/user'

export interface StoryListProps {
  stories: Story[]
  user: User | null
  onRemoveStory: (storyId: string) => Promise<void>
  onSaveStory: (story: Story) => Promise<void>
  onOpenModal: () => void
  onOpenLikesModal: () => void
}

export const StoryList: FC<StoryListProps> = ({
  stories,
  user,
  onRemoveStory,
  onSaveStory,
  onOpenModal,
  onOpenLikesModal,
}) => {
  return (
    <section className='story-list simple-cards-grid'>
      {stories.map((story) => (
        <StoryPreview
          onOpenModal={onOpenModal}
          onOpenLikesModal={onOpenLikesModal}
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
