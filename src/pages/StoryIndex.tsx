import { useEffect } from 'react'
import { StoryList } from '../cmps/StoryList'

import { loadStories, removeStory } from '../store/actions/story/story.actions'
import { useSelector } from 'react-redux'
import { RootState } from '../store/store'

export function StoryIndex() {
  const stories = useSelector((state: RootState) => state.storyModule.stories)
  useEffect(() => {
    loadStories()
  }, [])

  async function onRemoveStory(storyId: string) {
    await removeStory(storyId)
  }

  if (!stories) return <div>Loading...</div>
  return (
    <section className='story-index'>
      <StoryList onRemoveStory={onRemoveStory} stories={stories} />
    </section>
  )
}
