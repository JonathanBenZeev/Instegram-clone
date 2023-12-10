import React from 'react'

interface ModalProps {
  onCloseModal: () => void
  fromDetails?: boolean
}

const options = [
  'Report',
  'Unfollow',
  'Add to favorites',
  'Go to post',
  'Share to...',
  'Copy link',
  'Embed',
  'About this account',
  'Cancel',
]

export const ActionModal: React.FC<ModalProps> = ({ onCloseModal, fromDetails }) => {
  const handleOptionClick = (option: string) => {
    if (option === 'Cancel') {
      onCloseModal()
    }
    // Add more functionality here for other options if needed
  }

  return (
    <div className={`modal ${fromDetails? 'dark':''}`} onClick={onCloseModal}>
      <div className='modal-content' onClick={(ev) => ev.stopPropagation()}>
        <ul className='modal-options'>
          {options.map((option, index) => (
            <li
              key={index}
              className={`modal-option ${
                option === 'Report' || option === 'Unfollow' ? 'cancel' : ''
              }`}
              onClick={() => handleOptionClick(option)}
            >
              {option}
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
