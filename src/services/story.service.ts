import { Story, storyFilter, Comment } from '../interfaces/story'
import { User } from '../interfaces/user'
import { storageService } from './async-storage.service'
import { utilService } from './util.service'

export const storyService = {
  query,
  save,
  remove,
  getById,
  createstory,
  getDefaultFilter,
  getNextstoryId,
  makeComment,
}

const STORAGE_KEY = 'stories'
_createstories()

async function query(): Promise<Story[]> {
  return await storageService.query<Story>(STORAGE_KEY)
  // if (filterBy) {
  //     let { type, maxBattery, minBattery, model } = filterBy
  //     if (!maxBattery) maxBattery = Infinity
  //     if (!minBattery) minBattery = 0
  //     stories = stories.filter(story =>
  //         story.type.toLowerCase().includes(type.toLowerCase())
  //         && story.model.toLowerCase().includes(model.toLowerCase())
  //         && (story.batteryStatus < maxBattery)
  //         && story.batteryStatus > minBattery)
  // }
  // return stories
}

function getById(storyId: string): Promise<Story> {
  return storageService.get<Story>(STORAGE_KEY, storyId)
}

function remove(storyId: string): Promise<void> {
  return storageService.remove(STORAGE_KEY, storyId)
}

function save(storyToSave: Story): Promise<Story> {
  if (storyToSave._id) {
    return storageService.put(STORAGE_KEY, storyToSave)
  } else {
    return storageService.post(STORAGE_KEY, storyToSave)
  }
}

function createstory(model = '', type = ''): Partial<Story> {
  return {
    model,
    type,
    batteryStatus: 100,
  }
}

async function getNextstoryId(storyId: string) {
  const stories = await storageService.query<Story>(STORAGE_KEY)
  const idx = stories.findIndex((story) => story._id === storyId)
  let nextIdx = idx + 1
  if (nextIdx === stories.length) nextIdx = 0
  return stories[nextIdx]._id
}

function getDefaultFilter(): storyFilter {
  return {
    model: '',
    type: '',
    minBattery: 0,
    maxBattery: 0,
  }
}

function makeComment(comment: string, user: User): Comment {
  return {
    id: utilService.makeId(),
    txt: comment,
    by: { _id: user._id, fullname: user.fullname,username:user.username, imgUrl: user.imgUrl },
    likedBy: [],
  }
}

function _createstories(): void {
  let stories = utilService.loadFromStorage(STORAGE_KEY)
  if (!stories || !stories.length) {
    stories = [
      {
        _id: 's101',
        txt: 'Best trip ever',
        imgUrl:
          'https://res.cloudinary.com/dmldeettg/image/upload/v1696155391/cld-sample-3.jpg',
        by: {
          _id: 'u101',
          fullname: 'Ybz',
          username:'tal_12',
          imgUrl:
            'https://res.cloudinary.com/dmldeettg/image/upload/v1697302095/profile_phgx3i.png',
        },
        loc: {
          // Optional
          lat: 11.11,
          lng: 22.22,
          name: 'Tel Aviv',
        },
        comments: [
          {
            id: 'c1001',
            by: {
              _id: 'u105',
              fullname: 'Bob',
              username:'bobzilla',
              imgUrl:
                'https://res.cloudinary.com/dmldeettg/image/upload/v1697302095/profile_phgx3i.png',
            },
            txt: 'good one!',
            likedBy: [
              // Optional
              {
                _id: 'u105',
                fullname: 'Bob',
                username:'ss12',
                imgUrl:
                  'https://res.cloudinary.com/dmldeettg/image/upload/v1697302095/profile_phgx3i.png',
              },
            ],
          },
          {
            id: 'c1002',
            by: {
              _id: 'u106',
              fullname: 'Dob',
              username:'dodo',
              imgUrl:
                'https://res.cloudinary.com/dmldeettg/image/upload/v1697302095/profile_phgx3i.png',
            },
            txt: 'not good!',
          },
        ],
        likedBy: [
          {
            _id: 'u105',
            fullname: 'Bob',
            username:'tal_12',
            imgUrl:
              'https://res.cloudinary.com/dmldeettg/image/upload/v1697302095/profile_phgx3i.png',
          },
          {
            _id: 'Sc9vU',
            fullname: 'yoyo bu',
            username:'aribz2',
            imgUrl:
              'https://res.cloudinary.com/dmldeettg/image/upload/v1697302095/profile_phgx3i.png',
          },
          {
            _id: 'u106',
            fullname: 'Dob',
            username:'ybz6',
            imgUrl:
              'https://res.cloudinary.com/dmldeettg/image/upload/v1697302095/profile_phgx3i.png',
          },
        ],
        tags: ['fun', 'romantic'],
      },
      {
        _id: 's102',
        txt: 'Very great breakfast!',
        imgUrl:
          'https://res.cloudinary.com/dmldeettg/image/upload/v1696155391/cld-sample-4.jpg',
        by: {
          _id: 'u102',
          fullname: 'LU_bohem',
          username:'lu',
          imgUrl:
            'https://res.cloudinary.com/dmldeettg/image/upload/v1697302095/profile_phgx3i.png',
        },
        loc: {
          // Optional
          lat: 11.11,
          lng: 22.22,
          name: 'Tel Aviv',
        },
        comments: [
          {
            id: 'c1001',
            by: {
              _id: 'u105',
              fullname: 'Bob',
              username:'tal_12',
              imgUrl:
                'https://res.cloudinary.com/dmldeettg/image/upload/v1697302095/profile_phgx3i.png',
            },
            txt: 'good one!',
            likedBy: [
              // Optional
              {
                _id: 'u105',
                fullname: 'Bob',
                username:'tal_12',
                imgUrl:
                  'https://res.cloudinary.com/dmldeettg/image/upload/v1697302095/profile_phgx3i.png',
              },
            ],
          },
          {
            id: 'c1002',
            by: {
              _id: 'u106',
              fullname: 'Dob',
              username:'tal_12',
              imgUrl:
                'https://res.cloudinary.com/dmldeettg/image/upload/v1697302095/profile_phgx3i.png',
            },
            txt: 'not good!',
          },
        ],
        likedBy: [
          {
            _id: 'u105',
            fullname: 'Bob',
            username:'tal_12',
            imgUrl:
              'https://res.cloudinary.com/dmldeettg/image/upload/v1697302095/profile_phgx3i.png',
          },
          {
            _id: 'u106',
            fullname: 'Dob',
            username:'tal_12',
            imgUrl:
              'https://res.cloudinary.com/dmldeettg/image/upload/v1697302095/profile_phgx3i.png',
          },
        ],
        tags: ['fun', 'romantic'],
      },
    ]
    utilService.saveToStorage(STORAGE_KEY, stories)
  }
}
