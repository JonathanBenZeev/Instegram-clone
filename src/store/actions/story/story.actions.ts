import { storyService } from "../../../services/story.service";
import { store } from "../../store";
import { AddStoryAction, RemoveStoryAction, StoryActionType, SetStoriesAction } from "./interfaces";


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

