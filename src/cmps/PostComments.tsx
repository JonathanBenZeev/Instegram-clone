// import { FC } from 'react'
import { Link } from 'react-router-dom'
import { Comment } from '../interfaces/story'
export interface PostCommentsProps {
  comments: Comment[]
}
export const PostComments = ({ comments }: PostCommentsProps) => {
  return (
    <section className='post-comments'>
      {comments.map((comment) => (
        <div className='post-title' key={comment.id}>
          <Link to={comment.by.username}>
            <img src={comment.by.imgUrl} alt='profile' />
          </Link>
          <section className='by-title'>
            <Link to={comment.by.username}>
              <span className='user'>{comment.by.username}</span>&nbsp;
            </Link>
            <span className='title'>{comment.txt}</span>
            <div className='time'>
              <time>1h</time>
            </div>
          </section>
        </div>
      ))}
    </section>
  )
}
