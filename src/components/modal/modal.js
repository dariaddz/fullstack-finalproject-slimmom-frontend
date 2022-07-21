import { createPortal } from 'react-dom';
import { useEffect } from 'react';
import s from './modal.module.css';
import CloseIcon from '@mui/icons-material/Close';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useWindowWidth } from '@react-hook/window-size';
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
  const onlyWidth = useWindowWidth();

  return createPortal(
    <div className={s.overlay} onClick={handleBackdropclick}>
      <div className={s.modal}>
        {onlyWidth <= 768 ? (
          <div className={s.iconArrowBack}>
            {' '}
            <ArrowBackIcon onClick={onClose} />
          </div>
        ) : (
          <CloseIcon
            className={s.iconClose}
            onClick={onClose}
            sx={{
              cursor: 'pointer',
              margin: '-10px 0 10px 0',
              marginLeft: 'auto',
              textDecoration: 'none',
              color: '#000000',
              display: 'block',
            }}
          />
        )}
        <div className={s.wrapper}>{children}</div>
      </div>
    </div>,
    modalRoot
  );
}

export default Modal;
