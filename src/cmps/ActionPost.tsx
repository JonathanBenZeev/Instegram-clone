import { Story } from '../interfaces/story'
import { User } from '../interfaces/user'
import { HeartSvg, MessageSvg, PostSvg, RedHeartSvg, SaveSvg } from './Svg'

export interface ActionPostProps {
  user: User | null
  story: Story
  // onRemoveStory: (storyId: string) => Promise<void>
  onSaveStory: (story: Story) => Promise<void>
  // onOpenModal: () => void
  // onOpenLikesModal: () => void
  // getLikedByStory:(likedByStory:MiniUser[])=>void
}

export const ActionPost = ({ story, user, onSaveStory }: ActionPostProps) => {
  const setLike = () => {
    if (!user) return

    const isLiked = story.likedBy.some((like) => like._id === user?._id)
    if (isLiked)
      story.likedBy = story.likedBy.filter((like) => like._id !== user?._id)
    else
      story.likedBy.push({
        _id: user?._id,
        fullname: user?.fullname,
        imgUrl: user?.imgUrl,
        username: user.username,
      })

    onSaveStory(story)
  }
  function getLikeSvg() {
    return story.likedBy.some((like) => like._id === user?._id) ? (
      <RedHeartSvg />
    ) : (
      <HeartSvg />
    )
  }
  return (
    <div className='action-post flex column'>
      <section className='likes-wrapper'>
        <div className='like-container'>
          <div className='start-actions'>
            <span className='like-btn' onClick={setLike}>
              {getLikeSvg()}
            </span>
            <span className='message-btn'>
              <MessageSvg />
            </span>
            <span className='post-btn'>
              <PostSvg />
            </span>
          </div>
          <div className='end-actions'>
            <span className='save-btn'>
              <SaveSvg />
            </span>
          </div>
        </div>
        <div className='likes'>
          <span>{story.likedBy.length}</span>
          <p>
            {story.likedBy.length && story.likedBy.length >=2
              ? 'Likes'
              : 'Like'}
          </p>
        </div>
      </section>
      <div>comment</div>
    </div>
  )
}
