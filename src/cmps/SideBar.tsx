import { FC ,useState} from 'react'
import { HomeSvg,SearchSvg ,ExploreSvg,ReelsSvg,MessageSvg,HeartSvg,CreateSvg} from './Svg'
import { DynamicModal } from './DynamicModal'
import { ModalType } from '../pages/StoryIndex'

export const SideBar: FC = () => {
  const [dynamicModalProps, setDynamicModalProps] = useState<ModalType>({
    isOpen: false,
    modalTitle: 'Create new post',
  })
  const onCloseDynamicModal = () => {
    setDynamicModalProps((prevState) => ({ ...prevState, isOpen: false }))
  }
  const onOpenDynamicModal = () => {
    setDynamicModalProps((prevState) => ({ ...prevState, isOpen: true }))
  }
  return (
    <>
       {dynamicModalProps.isOpen && (
        <DynamicModal
          modalTitle={dynamicModalProps.modalTitle}
          onCloseDynamicModal={onCloseDynamicModal}
        />
      )}

    <div className='sidebar'>
      <div className='sidebar-item'> <span><HomeSvg/></span> <span>Home</span></div>
      <div className='sidebar-item'> <span><SearchSvg/></span> Search</div>
      <div className='sidebar-item'> <span><ExploreSvg/></span>Explore</div>
      <div className='sidebar-item'> <span><ReelsSvg/></span>Reels</div>
      <div className='sidebar-item'> <span><MessageSvg/></span>Messages</div>
      <div className='sidebar-item'> <span><HeartSvg/></span>Notifications</div>
      <div className='sidebar-item' onClick={onOpenDynamicModal}>
         <span><CreateSvg/></span>
                Create
      </div>
      <div className='sidebar-item'> <span><HomeSvg/></span>Profile</div>
      <div className='sidebar-item'> <span><HomeSvg/></span>Threads</div>
      <div className='sidebar-item'> <span><HomeSvg/></span>More</div>
    </div>
    </>
  )
}
