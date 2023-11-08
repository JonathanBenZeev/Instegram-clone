import { Story } from './../../../interfaces/story'
export enum StoryActionType {
  SET_STORIES = 'SET_STORIES',
  ADD_STORY = 'ADD_STORY',
  REMOVE_STORY = 'REMOVE_STORY',
  UPDATE_STORY = 'UPDATE_STORY',
  SET_FILTER_BY = 'SET_FILTER_BY',
}

// Action interfaces
export interface AddStoryAction {
  type: StoryActionType.ADD_STORY
  story: Story
}

export interface RemoveStoryAction {
  type: StoryActionType.REMOVE_STORY
  storyId: string
}

export interface SetStoriesAction {
  type: StoryActionType.SET_STORIES
  stories: Story[]
}

export interface UpdateStoryAction {
  type: StoryActionType.UPDATE_STORY
  story: Story
}

export type StoryAction =
  | AddStoryAction
  | RemoveStoryAction
  | SetStoriesAction
  | UpdateStoryAction
