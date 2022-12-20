import React, { useState, forwardRef, useImperativeHandle } from 'react';
import { Modal } from 'antd';
import { FORM_CANCEL } from '../../../utils/forms';

const DetailViewModal = ({ children, title }, ref) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleCancel = () => {
    setIsModalOpen(false);
  };
  useImperativeHandle(ref, () => ({
    open: () => {
      setIsModalOpen(true);
    },
  }));

  return (
    <Modal
      title={title}
      open={isModalOpen}
      onCancel={handleCancel}
      width={window.screen.width * 0.75}
      cancelText={FORM_CANCEL}
      okButtonProps={{ style: { display: 'none' } }}
    >
      {children}
    </Modal>
  );
};

export default forwardRef(DetailViewModal);
