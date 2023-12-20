import { ChangeEvent } from 'react'

import { CreatePostStage } from '../shared/type'
import { UploadImgPost } from './UploadImgPost'
import { DescCreatePost } from './DescCreatePost'
import { Story } from '../interfaces/story'

interface DynamicPostStageProps {
  postStage: CreatePostStage
  handelChange: ({
    target,
  }: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void
  onHandleStage: (value: CreatePostStage) => void
  handelImg: (imgFile: File) => void
  post:Story
}

export function DynamicPostStage(
  props: DynamicPostStageProps
): JSX.Element | null {
  switch (props.postStage) {
    case 0:
      return <UploadImgPost handelImg={props.handelImg} />
    case 1:
      return <DescCreatePost  handelChange={props.handelChange} post={props.post} />
    default:
      return null
  }
}
