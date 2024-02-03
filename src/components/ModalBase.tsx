import React from 'react';
import Modal from 'react-modal';

export interface ModalProps {
  isOpen: boolean;
  contentLabel?: string;
  onRequestClose: () => void;
  children: React.ReactNode;
}

Modal.setAppElement('#root');

export const ModalBase: React.FC<ModalProps> = ({
  isOpen,
  contentLabel,
  onRequestClose,
  children,
}) => (
  <Modal
    isOpen={isOpen}
    style={{
      content: {
        top: '50%',
        left: '50%',
        bottom: 'none',
        right: 'none',
        transform: 'translate(-50%, -50%)',
        padding: 0,
        minWidth: '266px',
      },
      overlay: { background: 'rgba(29, 29, 29, 0.75)' },
    }}
    contentLabel={contentLabel}
    onRequestClose={onRequestClose}
  >
    {children}
  </Modal>
);
