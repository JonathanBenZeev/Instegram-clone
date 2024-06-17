import { FC, useEffect, useState } from 'react'
import { HomeSvg, SearchSvg, ExploreSvg, ReelsSvg, MessageSvg, HeartSvg, CreateSvg } from './shared/Svg'
import { DynamicModal } from './DynamicModal'
import { ModalType } from '../pages/StoryIndex'
import { Link, useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { RootState } from '../store/store'

export const SideBar: FC = () => {
  const user = useSelector((state: RootState) => state.userModule.loggedInUser)
  const navigate = useNavigate()

  const [dynamicModalProps, setDynamicModalProps] = useState<ModalType>({
    isOpen: false,
    modalTitle: 'Create new post',
  })

  useEffect(() => {
    if (!user) navigate('/login')
  }, [])

  const onCloseDynamicModal = () => {
    setDynamicModalProps((prevState) => ({ ...prevState, isOpen: false }))
  }
  const onOpenDynamicModal = () => {
    setDynamicModalProps((prevState) => ({ ...prevState, isOpen: true }))
  }

  if (!user) return <h1>No!!!!!</h1>
  const { username } = user
  return (
    <>
      {dynamicModalProps.isOpen && (
        <DynamicModal
          modalTitle={dynamicModalProps.modalTitle}
          onCloseDynamicModal={onCloseDynamicModal}
        />
      )}

      <div className='sidebar'>
        <Link to='/'> <div className='sidebar-item'> <span><HomeSvg /></span> <span>Home</span></div></Link>
        <div className='sidebar-item'> <span><SearchSvg /></span> Search</div>
        <div className='sidebar-item'> <span><ExploreSvg /></span>Explore</div>
        <div className='sidebar-item'> <span><ReelsSvg /></span>Reels</div>
        <div className='sidebar-item'> <span><MessageSvg /></span>Messages</div>
        <div className='sidebar-item'> <span><HeartSvg /></span>Notifications</div>
        <div className='sidebar-item' onClick={onOpenDynamicModal}>
          <span><CreateSvg /></span>
          Create
        </div>
        <Link to={username}> <div className='sidebar-item'> <span><HomeSvg /></span>Profile</div></Link>
        <div className='sidebar-item'> <span><HomeSvg /></span>Threads</div>
        <div className='sidebar-item'> <span><HomeSvg /></span>More</div>
      </div>
    </>
  )
}
