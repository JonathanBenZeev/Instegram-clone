import { MiniUser } from './user';


interface Comment {
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
  by: MiniUser
  loc?: Location
  comments: Comment[]
  likedBy: MiniUser[]
  tags: string[]
}
