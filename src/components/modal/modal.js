import { createPortal } from 'react-dom';
import { useEffect } from 'react';
import s from './modal.module.css';

const modalRoot = document.querySelector('#modal-root');

function Modal({ onClose, children }) {
  useEffect(() => {
    const handleKeyDown = e => {
      if (e.code === 'Escape') {
        onClose(e);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  const handleBackdropclick = e => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return createPortal(
    <div className={s.overlay} onClick={handleBackdropclick}>
      <div className={s.modal}>
        <button className={s.btnCloseModal} type="button" onClick={onClose}>
          x
        </button>

        {children}
      </div>
    </div>,
    modalRoot
  );
}

export default Modal;
