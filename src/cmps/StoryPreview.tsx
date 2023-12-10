import { Link } from 'react-router-dom'
// import React, { KeyboardEvent } from 'react'

import { Story } from '../interfaces/story.ts'
import {
  HeartSvg,
  MessageSvg,
  PostSvg,
  SaveSvg,
  ActionSvg,
  RedHeartSvg,
} from './Svg'
import { useState } from 'react'
import { User } from '../interfaces/user'
import { storyService } from '../services/story.service'
export interface StoryPreviewProps {
  user: User | null
  story: Story
  onRemoveStory: (storyId: string) => Promise<void>
  onSaveStory: (story: Story) => Promise<void>
  onOpenModal: () => void
  onOpenLikesModal: () => void
}
export function StoryPreview({
  story,
  user,
  onRemoveStory,
  onSaveStory,
  onOpenModal,
  onOpenLikesModal
}: StoryPreviewProps) {
  const [storyComment, setStoryComment] = useState<string>('')

  const addComment = (story: Story) => {
    if (!user) return
    const comment = storyService.makeComment(storyComment, user)
    story.comments.unshift(comment)
    onSaveStory(story)
    setStoryComment('')
  }

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

  const { by, comments, imgUrl } = story
  // console.log(imgUrl)

  return (
    <article className='story-preview'>
      <div className='story-header'>
        <div className='by-user'>
          <img src={by.imgUrl} alt='profile' />
          <Link to={by.username} className='story-user-name link'>
            {by.username}
          </Link>
          <div className='time'>
            <span>•</span>
            <time>1h</time>
          </div>
        </div>
        <span className='action-btn' onClick={onOpenModal}>
          <ActionSvg />
        </span>
      </div>
      <div className='img-container'>
        <img src={imgUrl} alt='' />
      </div>
      <section className='actions-container'>
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
      </section>
      <div className='likes' onClick={onOpenLikesModal}>
        <span>{story.likedBy.length}</span>
        <p>likes</p>
      </div>
      <div className='post-headline'>
        <span className='story-name'>{by.username}</span>
        <span className='story-txt'>{story.txt}</span>
      </div>
      <div className='comments'>
        <Link to={`/post/${story._id}`}>
          <p>View all {comments.length} comments</p>
        </Link>
      </div>
      <div className='comments-preview'>
        {comments.slice(0, 2).map((comment) => (
          <div key={comment.id} className='post-headline'>
            <span className='story-name'>{comment.by.username}</span>
            <span className='story-txt'>{comment.txt}</span>
          </div>
        ))}
      </div>
      <div className='comment-input'>
        <input
          type='text'
          value={storyComment}
          placeholder='Add a comment...'
          onChange={(ev) => setStoryComment(ev.target.value)}
        />
        {storyComment && (
          <p className='post-btn' onClick={() => addComment(story)}>
            Post
          </p>
        )}
      </div>
    </article>
  )
}
