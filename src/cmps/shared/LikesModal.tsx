import { useSelector } from 'react-redux'

import { MiniUser, User } from '../../interfaces/user'
import { RootState } from '../../store/store'
import { updateUser } from '../../store/actions/user/user.actions'

export interface likesModalProps {
  likedByStory: MiniUser[]
}

export function LikesModal({ likedByStory }: likesModalProps) {
  const user: User | null = useSelector(
    (state: RootState) => state.userModule.loggedInUser
  )

  function getSortByFollowing() {
    likedByStory.sort((likedBy) => {
      if (user?.following?.some((follow) => follow._id === likedBy._id))
        return -1
      else return 1
    })
    return likedByStory.filter((like) => like._id !== user?._id)
  }

  async function onSaveUser(likedBy: MiniUser) {
    console.log(likedBy._id)

    if (!user) return
    const userToUpdate: User = {
      ...user,
    }

    if (!userToUpdate.following?.some((follow) => follow._id === likedBy._id)) {
      userToUpdate.following?.push(likedBy)
    } else {
      const likeIdx = userToUpdate.following?.findIndex(
        (follow) => follow._id === likedBy._id
      )
      userToUpdate.following.splice(likeIdx, 1)
    }

    await updateUser(userToUpdate)
  }

  const getBtn = (likedBy: MiniUser) => {
    const isFollowing = user?.following?.some(
      (user) => user._id === likedBy._id
    )
      ? true
      : false
    return (
      <div className={`follow-action ${isFollowing ? 'following' : ''}`}>
        <span onClick={() => onSaveUser(likedBy)}>
          {isFollowing ? 'Following' : 'Follow'}
        </span>
      </div>
    )
  }

  return (
    <>
      {getSortByFollowing().map((likedBy) => (
        <div className='like-modal' key={likedBy._id}>
          <div className='user-profile'>
            <img src={likedBy.imgUrl} alt='' />
            <div className='profile-name'>
              <span className='username'>{likedBy.username}</span>
              <span>{likedBy.fullname}</span>
            </div>
          </div>
          {getBtn(likedBy)}
        </div>
      ))}
    </>
  )
}
