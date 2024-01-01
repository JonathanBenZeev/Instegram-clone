import { MiniUser } from './user'

export interface Comment {
  id: string
  by: MiniUser
  txt: string
  likedBy?: MiniUser[]
}

export interface Location {
  lat: number
  lng: number
  name: string
}

export interface Story {
  _id: string
  txt: string
  imgUrl: string
  by: MiniUser | null
  loc?: Location
  comments: Comment[]
  likedBy: MiniUser[]
  tags: string[]
}
export interface StoryToSave {
  txt: string
  imgUrl: string
  by: MiniUser | null
  loc?: Location
  comments: Comment[]
  likedBy: MiniUser[]
  tags: string[]
}
