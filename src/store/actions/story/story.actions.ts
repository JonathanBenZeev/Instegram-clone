import { Story } from "../../../interfaces/story";
import { storyService } from "../../../services/story.service";
import { store } from "../../store";
import { AddStoryAction, RemoveStoryAction, StoryActionType, SetStoriesAction,UpdateStoryAction } from "./interfaces";


export async function loadStories() {
    try {
        const stories = await storyService.query()
        store.dispatch<SetStoriesAction>({
            type: StoryActionType.SET_STORIES,
            stories
        })
    } catch (error) {
        console.log('error:', error)
    }

}


export async function removeStory(storyId: string) {
    try {
        await storyService.remove(storyId)
        store.dispatch<RemoveStoryAction>({
            type: StoryActionType.REMOVE_STORY,
            storyId
        })
    } catch (error) {
        console.log('error:', error)
    }

}
export async function updateStory(savedStory:Story) {
    try {
       const story= await storyService.save(savedStory)
        store.dispatch<UpdateStoryAction>({
            type: StoryActionType.UPDATE_STORY,
            story
        })
    } catch (error) {
        console.log('error:', error)
    }

}
export async function addStory(newStory:Story) {
    try {
       const story= await storyService.save(newStory)
        store.dispatch<AddStoryAction>({
            type: StoryActionType.ADD_STORY,
            story
        })
    } catch (error) {
        console.log('error:', error)
    }

}

