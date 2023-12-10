import { LikesModal } from './LikesModal'
import { ExitSvg } from './Svg'

export interface DynamicModalProps {
  modalTitle: string
  onCloseDynamicModal: () => void
}

export const DynamicModal = ({
  modalTitle,
  onCloseDynamicModal,
}: DynamicModalProps) => {
  const getCmp = () => {
    switch (modalTitle) {
      case 'Likes':
        return <LikesModal />
      default:
        return <LikesModal />
    }
  }

  return (
    <section className='dynamic-modal-wrapper'>
      <section className='dynamic-modal'>
        <div className='modal-header-wrapper'>
          <div className='modal-header'>
            <span></span>
            <h1>{modalTitle}</h1>
            <span onClick={onCloseDynamicModal} className='modal-close-btn'>
              <ExitSvg />
            </span>
          </div>
        </div>
        <div className='modal-content-wrapper'>{getCmp()}</div>
        {/* <div style={modalTitle === 'Menu' ? {maxHeight:'448px'} : {}} className="modal-content-wrapper">{modalTypeToOpen}</div> */}
        {/* <div className='modal-content-wrapper'>{modalTypeToOpen}</div> */}
      </section>
    </section>
  )
}
