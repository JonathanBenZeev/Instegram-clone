


import { FC ,ChangeEvent } from 'react'
import { Story } from '../interfaces/story'

interface DescCreatePostProps {
//   handelImg: (imageUrl:File)=>void
handelChange: ({
    target,
  }: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void
  post:Story
}

export const DescCreatePost: FC<DescCreatePostProps > = ({post, handelChange}) => {


  return (
    <div className='desc-create-post' >
    <div className='img-container'>
        <img src={post.imgUrl} alt="upload-img" />
    </div>
    <div className='upload-desc'>
      <div className="user-profile">
        <img className='avatar' src={post.by?.imgUrl} alt="" />
        <p>{post.by?.username}</p>
      </div>
      <div className="desc">
        <textarea name="txt" value={post.txt} onChange={handelChange} placeholder='Write a caption' />
      </div>
    </div>
    </div>
  )
}
