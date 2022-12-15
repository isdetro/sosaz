import { forwardRef, useCallback, useImperativeHandle, useState } from 'react';
import { Form, Modal as AntModal } from 'antd';
import ConfirmModal from './ConfirmModal';
import { FORM_CANCEL, FORM_CONFIRM } from '../../../utils/forms';

const FormModal = ({ title, titleEdit, onSubmit, children, onEdit }, ref) => {
  const { useForm } = Form;
  const [form] = useForm();
  const [isLoading, setIsLoading] = useState(false);
  const [isVisible, setIsVisible] = useState();
  const [isEditing, setIsEditing] = useState(false);

  const [confirmModal, setConfirmModal] = useState(false);

  const closeModal = useCallback(() => {
    if (form.isFieldsTouched()) {
      return setConfirmModal(true);
    }
    return setIsVisible(false);
  }, [form]);

  const onFinalCancel = useCallback(() => {
    form.resetFields();
    setIsVisible(false);
  }, [form]);

  useImperativeHandle(ref, () => ({
    open: () => {
      setIsVisible(true);
      setIsEditing(false);
      form.resetFields();
    },
    close: () => {
      closeModal();
    },
    setEdit: (data) => {
      setIsVisible(true);
      setIsEditing(true);
      form.setFieldsValue(data);
    },
    isEditing: () => {
      return isEditing;
    },
  }));

  const onFormSubmit = useCallback(() => {
    const data = form.getFieldsValue();

    setIsLoading(true);

    if (isEditing && onEdit !== undefined) {
      setIsLoading(true);
      onEdit(data);
    } else {
      setIsLoading(true);
      onSubmit(data)
        .then((data) => setIsLoading(true))
        .catch((error) => console.log(error))
        .finally(() => setIsLoading(false));
    }

    // const promiseToBe =
    //   isEditing && onEdit !== undefined
    //     ? onEdit(form.getFieldValue('id'), data)
    //     : onSubmit(data);

    // promiseToBe
    //   .then(() => {
    //     form.resetFields();
    //     setConfirmModal(false);
    //     setIsVisible(false);
    //   })
    //   .catch((e) => {
    // if (e.errors !== undefined) {
    //   const ktf = e.errors
    //   const res = Object.entries(ktf)
    //     .filter(([, value]) => value !== undefined)
    //     .map(([key, value]) => ({
    //       name: key,
    //       errors: value,
    //     }))
    //   form.setFields(res)
    //   form.scrollToField(res[0]?.name)
    // }
    // })
    // .finally(() => {
    //   setIsLoading(false);
    // });
  }, [form, isEditing, onEdit, onSubmit]);

  return (
    <>
      <ConfirmModal
        toggle={setConfirmModal}
        onOk={onFinalCancel}
        confirmModal={confirmModal}
      />
      <AntModal
        width={window.screen.width * 0.75}
        okText={FORM_CONFIRM}
        cancelText={FORM_CANCEL}
        title={isEditing ? titleEdit : title}
        open={isVisible}
        onOk={form.submit}
        onCancel={closeModal}
        destroyOnClose={confirmModal}
        mask={true}
        maskClosable={false}
      >
        <Form
          disabled={isLoading}
          onFinish={onFormSubmit}
          layout='vertical'
          form={form}
        >
          {children?.(isEditing)}
        </Form>
      </AntModal>
    </>
  );
};

export default forwardRef(FormModal);
