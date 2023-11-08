import { useEffect } from 'react'
import { StoryList } from '../cmps/StoryList'

import {
  loadStories,
  removeStory,
  updateStory,
} from '../store/actions/story/story.actions'
import { useSelector } from 'react-redux'
import { RootState } from '../store/store'
import { Story } from '../interfaces/story'

export function StoryIndex() {
  const stories = useSelector((state: RootState) => state.storyModule.stories)
  const user = useSelector((state: RootState) => state.userModule.loggedInUser)

  useEffect(() => {
    loadStories()
  }, [])

  async function onRemoveStory(storyId: string) {
    await removeStory(storyId)
  }
  async function onSaveStory(story: Story) {
    await updateStory(story)
  }

  if (!stories) return <div>Loading...</div>
  return (
    <section className='story-index'>
      <StoryList
        onRemoveStory={onRemoveStory}
        onSaveStory={onSaveStory}
        stories={stories}
        user={user}
      />
      {/* <div>Another thing</div> */}
    </section>
  )
}
