import { User } from '../interfaces/user'
import { storageService } from './async-storage.service'
// import { httpService } from './http.service'

const STORAGE_KEY_LOGGEDIN_USER = 'loggedinUser'

export const userService = {
  login,
  logout,
  signup,
  getLoggedinUser,
  saveLocalUser,
  getUsers,
  getById,
  remove,
}

// window.userService= userService

async function getUsers(): Promise<User[]> {
  return storageService.query<User>('user')
  // return httpService.get(`user`)
}

async function getById(userId: string): Promise<User> {
  //   if (!userId) return null
  return await storageService.get('user', userId)
  // const user = await httpService.get(`user/${userId}`)
}

function remove(userId: string) {
  return storageService.remove('user', userId)
  // return httpService.delete(`user/${userId}`)
}

// async function update({ _id, score }) {
//   const user = await storageService.get('user', _id)
//   user.score = score
//   await storageService.put('user', user)

//   // const user = await httpService.put(`user/${_id}`, {_id, score})
//   // // Handle case in which admin updates other user's details
//   if (getLoggedinUser()._id === user._id) saveLocalUser(user)
//   return user
// }

async function login(userCred: User) {
  const users = await getUsers()
  // if (!users || !users.length) return
  const user = users.find((u) => u.username === userCred.username)
  if (!user) return
  // const user = await httpService.post('auth/login', userCred)

  saveLocalUser(user)
  return Promise.resolve(user)
}

async function signup(userCred: User) {
  if (!userCred.imgUrl)
    userCred.imgUrl =
      'https://cdn.pixabay.com/photo/2020/07/01/12/58/icon-5359553_1280.png'

  userCred.followers = []
  userCred.following = [
    {
      _id: 'u106',
      fullname: 'Dob',
      username:'fdsfds',
      imgUrl: 'http://some-img',
    },
  ]
  userCred.savedStoryIds = []

  const user = await storageService.post('user', userCred)
  // const user = await httpService.post('auth/signup', userCred)
  return saveLocalUser(user)
}

async function logout() {
  sessionStorage.removeItem(STORAGE_KEY_LOGGEDIN_USER)
  // return await httpService.post('auth/logout')
}

// async function changeScore(by) {
//   const user = getLoggedinUser()
//   if (!user) throw new Error('Not loggedin')
//   user.score = user.score + by || by
//   await update(user)
//   return user.score
// }

function saveLocalUser(user: User) {
  sessionStorage.setItem(STORAGE_KEY_LOGGEDIN_USER, JSON.stringify(user))
  return user
}

function getLoggedinUser(): User | null {
  const loggedInUser = sessionStorage.getItem(STORAGE_KEY_LOGGEDIN_USER)
  if (loggedInUser) {
    return JSON.parse(loggedInUser)
  }
  return null
}

// ;(async ()=>{
//     await userService.signup({fullname: 'Puki Norma', username: 'puki', password:'123',score: 10000, isAdmin: false})
//     await userService.signup({fullname: 'Master Adminov', username: 'admin', password:'123', score: 10000, isAdmin: true})
//     await userService.signup({fullname: 'Muki G', username: 'muki', password:'123', score: 10000})
// })()
