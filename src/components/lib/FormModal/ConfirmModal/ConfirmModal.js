import { Modal } from 'antd';

export default function ConfirmModal({ toggle, confirmModal, onOk }) {
  const handleOk = () => {
    toggle(false);
    onOk();
  };

  const handleCancel = () => {
    toggle(false);
  };

  return (
    <Modal
      title='Məlumatlar itəcək'
      open={confirmModal}
      onOk={handleOk}
      onCancel={handleCancel}
      okText={'Bəli'}
      cancelText={'Xeyr'}
    >
      <p>Bağlamaq istədiyinizdən əminsinizmi?</p>
    </Modal>
  );
}
