import { MiniUser } from '../interfaces/user'
import { CreatePostModal } from './CreatePostModal'
import { LikesModal } from './LikesModal'
import { ExitSvg } from './Svg'
import { useState, useEffect } from 'react'

export interface DynamicModalProps {
  modalTitle: string
  onCloseDynamicModal: () => void
  likedByStory?: MiniUser[]
}

export const DynamicModal = ({
  modalTitle,
  onCloseDynamicModal,
  likedByStory,
}: DynamicModalProps) => {
  const [modalWidth, setModalWidth] = useState<string | null>(null)

  // useEffect(() => {
  //   modalTitle === 'Likes' ? setModalWidth('400px') : setModalWidth('528px')
  // }, [])

  const getCmp = () => {
    switch (modalTitle) {
      case 'Likes':
        return <LikesModal likedByStory={likedByStory!} />
      case 'Create new post':
        return <CreatePostModal changeModalWidth={changeModalWidth}  onCloseDynamicModal={onCloseDynamicModal}/>
      default:
        return <LikesModal likedByStory={likedByStory!} />
    }
  }

  const changeModalWidth = (modalWidth: string) => {
    setModalWidth(modalWidth)
  }

  const getModalWidth = () => {
    if (modalWidth) return modalWidth
    modalTitle === 'Likes' ? '400px' : '528px'
  }

  // if (!modalWidth) return <h1>Loading..</h1>
  return (
    <section className='dynamic-modal-wrapper' onClick={onCloseDynamicModal}>
      <div onClick={(ev) => ev.stopPropagation()}>
        {modalTitle !== 'Likes' && (
          <span onClick={onCloseDynamicModal} className='modal-close-btn-out'>
            <ExitSvg />
          </span>
        )}
        <section
          className='dynamic-modal'
          style={
            // modalTitle === 'Likes'
            //   ? { width: modalWidth }
            //   : { width: modalWidth }
            { width: getModalWidth() }
          }
        >
          {modalTitle === 'Likes' && (
            <div className='modal-header-wrapper'>
              <div
                className='modal-header'
                style={
                  modalTitle === 'Likes'
                    ? { width: '400px' }
                    : { width: '528px' }
                }
              >
                <span></span>
                <h1>{modalTitle}</h1>
                <span onClick={onCloseDynamicModal} className='modal-close-btn'>
                  <ExitSvg />
                </span>
              </div>
            </div>
          )}
          <div className='modal-content-wrapper'>{getCmp()}</div>
          {/* <div style={modalTitle === 'Menu' ? {maxHeight:'448px'} : {}} className="modal-content-wrapper">{modalTypeToOpen}</div> */}
          {/* <div className='modal-content-wrapper'>{modalTypeToOpen}</div> */}
        </section>
      </div>
    </section>
  )
}
