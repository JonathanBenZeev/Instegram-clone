import { userService } from '../../../services/user.service'
import { store } from '../../store'
import {
  LoginAction,
  SpendBalanceAction,
  UserActionType,
  SignupAction,
  UpdateAction,
} from './interfaces'
import { User } from '../../../interfaces/user'

export async function spendBalance(amount: number) {
  try {
    store.dispatch<SpendBalanceAction>({
      type: UserActionType.SPEND_BALANCE,
      amount,
    })
  } catch (error) {
    console.log('error:', error)
  }
}

export async function login(credentials: User) {
  try {
    const user = await userService.login(credentials)
    if (!user) return
    store.dispatch<LoginAction>({
      type: UserActionType.SET_USER,
      user,
    })

    return user
  } catch (err) {
    console.log('Cannot login', err)
    throw err
  }
}

export async function signup(credentials: User) {
  try {
    const user = await userService.signup(credentials)
    store.dispatch<SignupAction>({
      type: UserActionType.SET_USER,
      user,
    })
    return user
  } catch (err) {
    console.log('Cannot signup', err)
    throw err
  }
}
export async function updateUser(user: User) {
  try {
    await userService.update(user)
    store.dispatch<UpdateAction>({
      type: UserActionType.UPDATE_USER,
      user,
    })
    return user
  } catch (err) {
    console.log('Cannot signup', err)
    throw err
  }
}
