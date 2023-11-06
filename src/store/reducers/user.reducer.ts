import { User } from './../../interfaces/user'
import { UserAction, UserActionType } from '../actions/user/interfaces'
import { userService } from '../../services/user.service'

export interface UserState {
  loggedInUser: User | null
  users: User[]
}

const initialState = {
  loggedInUser: userService.getLoggedinUser() || null,
  users: [],
}

export function userReducer(state = initialState, action = {} as UserAction) {
  // let newState = state
  switch (action.type) {
    case UserActionType.SET_USER:
      return {
        ...state,
        loggedInUser: action.user,
      }
    default:
      return state
  }
}
