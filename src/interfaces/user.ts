
export interface User {
  _id: string
  username: string
  password: string
  fullname: string
  imgUrl?: string
  following?: MiniUser[]
  followers?: MiniUser[]
  savedStoryIds?: string[]
  myStoryIds: string[]
}
export interface MiniUser {
  _id: string
  fullname: string
  username: string
  imgUrl?: string
}

export interface UserMsg {
  type: string
  txt: string
}
