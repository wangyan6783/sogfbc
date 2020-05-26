import React from 'react';

interface Props {
  imageUrl: string;
  imageAlt: string;
  setModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const Modal: React.FC<Props> = ({ imageUrl, imageAlt, setModalOpen }) => {
  function closeModal(event: any) {
    //event delegation
    if (event.target.matches('.modal')) {
      setModalOpen(false);
    }
  }

  return (
    <div className='modal' onClick={closeModal}>
      <img className='modal-image' src={imageUrl} alt={imageAlt} />
    </div>
  );
};

export default Modal;
