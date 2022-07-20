import { createPortal } from 'react-dom';
import { useEffect } from 'react';
import s from './modal.module.css';
import CloseIcon from '@mui/icons-material/Close';
const modalRoot = document.querySelector('#modal-root');

function Modal({ onClose, children }) {
  useEffect(() => {
    const handleKeyDown = e => {
      if (e.code === 'Escape') {
        onClose(e);
      }
      document.body.style.overflow = 'hidden';
      return () => (document.body.style.overflow = 'unset');
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
        <CloseIcon
          onClick={onClose}
          sx={{
            cursor: 'pointer',
            marginLeft: 'auto',
            marginBottom: 1,
            textDecoration: 'none',
            color: '#000000',
            display: 'block',
          }}
        />

        {children}
      </div>
    </div>,
    modalRoot
  );
}

export default Modal;
