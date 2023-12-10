import { useEffect, useState } from 'react'
import { StoryList } from '../cmps/StoryList'

import {
  loadStories,
  removeStory,
  updateStory,
} from '../store/actions/story/story.actions'
import { useSelector } from 'react-redux'
import { RootState } from '../store/store'
import { Story } from '../interfaces/story'
import { Outlet } from 'react-router-dom'
import { ActionModal } from '../cmps/ActionModal'
import { DynamicModal } from '../cmps/DynamicModal'

export interface ModalType {
  isOpen: boolean
  modalTitle: string
}

export function StoryIndex() {
  const stories = useSelector((state: RootState) => state.storyModule.stories)
  const user = useSelector((state: RootState) => state.userModule.loggedInUser)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [dynamicModalProps, setDynamicModalProps] = useState<ModalType>({
    isOpen: true,
    modalTitle: 'Likes',
  })
  useEffect(() => {
    loadStories()
  }, [])

  async function onRemoveStory(storyId: string) {
    await removeStory(storyId)
  }
  async function onSaveStory(story: Story) {
    await updateStory(story)
  }

  const onCloseDynamicModal = () => {
    setDynamicModalProps((prevState) => ({ ...prevState, isOpen: false }))
  }
  const onOpenDynamicModal = () => {
    setDynamicModalProps((prevState) => ({ ...prevState, isOpen: true }))
  }
  const onOpenActionModal = () => {
    setIsModalOpen(true)
  }
  const onCloseActionModal = () => {
    setIsModalOpen(false)
  }

  if (!stories) return <div>Loading...</div>
  return (
    <section className='story-index'>
      {isModalOpen && <ActionModal onCloseModal={onCloseActionModal} />}
      {dynamicModalProps.isOpen && (
        <DynamicModal
          modalTitle={dynamicModalProps.modalTitle}
          onCloseDynamicModal={onCloseDynamicModal}
        />
      )}

      <StoryList
        onOpenModal={onOpenActionModal}
        onOpenLikesModal={onOpenDynamicModal}
        onRemoveStory={onRemoveStory}
        onSaveStory={onSaveStory}
        stories={stories}
        user={user}
      />
      <Outlet />
      {/* <div>Another thing</div> */}
    </section>
  )
}
