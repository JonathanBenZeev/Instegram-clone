import { FC } from 'react'
import { StoryPreview } from './StoryPreview'
import { Story } from '../interfaces/story'
import { MiniUser, User } from '../interfaces/user'

export interface StoryListProps {
  stories: Story[]
  user: User | null
  onRemoveStory: (storyId: string) => Promise<void>
  onSaveStory: (story: Story) => Promise<void>
  onOpenModal: () => void
  onOpenLikesModal: () => void
  getLikedByStory:(likedByStory:MiniUser[])=>void
}

export const StoryList: FC<StoryListProps> = ({
  stories,
  user,
  onRemoveStory,
  onSaveStory,
  onOpenModal,
  onOpenLikesModal,
  getLikedByStory
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
          getLikedByStory={getLikedByStory}
        />
      ))}
    </section>
  )
}
