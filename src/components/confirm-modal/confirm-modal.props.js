import { useRef } from 'react';

export const useUnModalProps = ({ onClose }) => {
  const modalRef = useRef(null);

  const handleCloseModal = e => {
    if (modalRef.current === e.target) {
      onClose();
    }
  };

  return {
    modalRef,
    handleCloseModal
  };
};
