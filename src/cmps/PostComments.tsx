import { FC } from 'react'
import { Comment } from '../interfaces/story'
export interface PostCommentsProps {
  comments: Comment
}
export const PostComments: FC = () => {
  return <section className='post-comments'>PostComments</section>
}
