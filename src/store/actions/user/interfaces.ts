import { User } from './../../../interfaces/user'
export enum UserActionType {
  // SET_USER_MSG = 'SET_USER_MSG',
  SPEND_BALANCE = 'SPEND_BALANCE',
  SET_USER = 'SET_USER',
  UPDATE_USER = 'UPDATE_USER',
}

export interface SpendBalanceAction {
  type: UserActionType.SPEND_BALANCE
  amount: number
}

export interface LoginAction {
  type: UserActionType.SET_USER
  user: User
}

export interface SignupAction {
  type: UserActionType.SET_USER
  user: User
}
export interface UpdateAction {
  type: UserActionType.UPDATE_USER
  user: User
}

export type UserAction =
  | SpendBalanceAction
  | SignupAction
  | LoginAction
  | UpdateAction
