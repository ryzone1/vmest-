import { ReactNode } from 'react';
import styles from './modal.module.css';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  onAccept: () => void;
  agreementText: string;
  children?: ReactNode;
}

export const Modal = ({ isOpen, onClose, onAccept, agreementText, children }: ModalProps) => {
  if (!isOpen) return null;

  return (
    <div className={styles.overlay} onClick={onClose}>
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        {children ? (
          children
        ) : (
          <>
            <p className={styles.agreement}>{agreementText}</p>
            <div className={styles.actions}>
              <button onClick={onAccept}>Принять</button>
              <button onClick={onClose}>Отказаться</button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};