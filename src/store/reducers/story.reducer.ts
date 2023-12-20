import { Story } from './../../interfaces/story'
import { StoryAction, StoryActionType } from '../actions/story/interfaces'

export interface StoryState {
  stories: Story[] | null
}

const initialState: StoryState = {
  stories: null,
}

export function storyReducer(state = initialState, action = {} as StoryAction) {
  switch (action.type) {
    case StoryActionType.SET_STORIES:
      return {
        ...state,
        stories: action.stories,
      }
    case StoryActionType.ADD_STORY:
     
      return {
        ...state,
        stories: [action.story,...state.stories!],
      }
    case StoryActionType.REMOVE_STORY:
      return {
        ...state,
        stories: state.stories!.filter((story) => story._id !== action.storyId),
      }
    case StoryActionType.UPDATE_STORY:
      return {
        
        ...state,
        stories: state.stories!.map((story) =>
          story._id === action.story._id ? action.story : story
        ),
      }

    default:
      return state
  }
}
