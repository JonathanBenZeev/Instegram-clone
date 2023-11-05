import { story, storyFilter } from '../interfaces/story'
import { storageService } from './async-storage.service'
import { utilService } from './util.service'

export const storyService = {
    query,
    save,
    remove,
    getById,
    createstory,
    getDefaultFilter,
    getNextstoryId
}

const STORAGE_KEY = 'stories'
_createstories()

async function query(): Promise<story[]> {
 return await storageService.query<story>(STORAGE_KEY)
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

function getById(storyId: string): Promise<story> {
    return storageService.get<story>(STORAGE_KEY, storyId)
}

function remove(storyId: string): Promise<void> {
    return storageService.remove(STORAGE_KEY, storyId)
}

function save(storyToSave: story): Promise<story> {
    if (storyToSave._id) {
        return storageService.put(STORAGE_KEY, storyToSave)
    } else {
        return storageService.post(STORAGE_KEY, storyToSave)
    }
}

function createstory(model = '', type = ''): Partial<story> {
    return {
        model,
        type,
        batteryStatus: 100
    }
}

async function getNextstoryId(storyId: string) {
    const stories = await storageService.query<story>(STORAGE_KEY)
    const idx = stories.findIndex(story => story._id === storyId)
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

function _createstories(): void {
    let stories = utilService.loadFromStorage(STORAGE_KEY)
    if (!stories || !stories.length) {
        stories = [
            {
                _id: "s101",
                txt: "Best trip ever",
                imgUrl: "https://res-console.cloudinary.com/dmldeettg/thumbnails/v1/image/upload/v1696155391/Y2xkLXNhbXBsZS0z/grid_landscape", 
                by: {
                  _id: "u101",
                  fullname: "Ybz",
                  imgUrl: "https://res.cloudinary.com/dmldeettg/image/upload/v1697302095/profile_phgx3i.png"
                },
                loc: { // Optional
                  lat: 11.11, 
                  lng: 22.22,
                  name: "Tel Aviv"
                },
                comments: [
                  {
                    id: "c1001",
                    by: {
                      _id: "u105",
                      fullname: "Bob",
                      imgUrl: "https://res.cloudinary.com/dmldeettg/image/upload/v1697302095/profile_phgx3i.png"
                    },
                    txt: "good one!",
                    likedBy: [ // Optional
                      {
                        "_id": "u105",
                        "fullname": "Bob",
                        "imgUrl": "https://res.cloudinary.com/dmldeettg/image/upload/v1697302095/profile_phgx3i.png"
                      }
                    ]
                  },
                  {
                    id: "c1002",
                    by: {
                      _id: "u106",
                      fullname: "Dob",
                      imgUrl: "https://res.cloudinary.com/dmldeettg/image/upload/v1697302095/profile_phgx3i.png"
                    },
                    txt: "not good!",
                  }
                ],
                likedBy: [
                  {
                    _id: "u105",
                    fullname: "Bob",
                    imgUrl: "https://res.cloudinary.com/dmldeettg/image/upload/v1697302095/profile_phgx3i.png"
                  },
                  {
                    _id: "u106",
                    fullname: "Dob",
                    imgUrl: "https://res.cloudinary.com/dmldeettg/image/upload/v1697302095/profile_phgx3i.png"
                  }
                ],
                tags: ["fun", "romantic"]
            },
            {
                _id: "s102",
                txt: "Best game!",
                imgUrl: "https://res-console.cloudinary.com/dmldeettg/thumbnails/v1/image/upload/v1696155391/Y2xkLXNhbXBsZS0z/grid_landscape", 
                by: {
                  _id: "u102",
                  fullname: "LU_bohem",
                  imgUrl: "https://res.cloudinary.com/dmldeettg/image/upload/v1697302095/profile_phgx3i.png"
                },
                loc: { // Optional
                  lat: 11.11, 
                  lng: 22.22,
                  name: "Tel Aviv"
                },
                comments: [
                  {
                    id: "c1001",
                    by: {
                      _id: "u105",
                      fullname: "Bob",
                      imgUrl: "https://res.cloudinary.com/dmldeettg/image/upload/v1697302095/profile_phgx3i.png"
                    },
                    txt: "good one!",
                    likedBy: [ // Optional
                      {
                        "_id": "u105",
                        "fullname": "Bob",
                        "imgUrl": "https://res.cloudinary.com/dmldeettg/image/upload/v1697302095/profile_phgx3i.png"
                      }
                    ]
                  },
                  {
                    id: "c1002",
                    by: {
                      _id: "u106",
                      fullname: "Dob",
                      imgUrl: "https://res.cloudinary.com/dmldeettg/image/upload/v1697302095/profile_phgx3i.png"
                    },
                    txt: "not good!",
                  }
                ],
                likedBy: [
                  {
                    _id: "u105",
                    fullname: "Bob",
                    imgUrl: "https://res.cloudinary.com/dmldeettg/image/upload/v1697302095/profile_phgx3i.png"
                  },
                  {
                    _id: "u106",
                    fullname: "Dob",
                    imgUrl: "https://res.cloudinary.com/dmldeettg/image/upload/v1697302095/profile_phgx3i.png"
                  }
                ],
                tags: ["fun", "romantic"]
            }
        ]
        utilService.saveToStorage(STORAGE_KEY, stories)
    }
}


