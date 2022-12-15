import PageButton from '../../components/lib/PageButton';
import PageHeading from '../../components/lib/PageHeading';
import Table from '../../components/lib/Table';
import { PAGE_USERS } from '../../utils/navigation';
import { useCallback, useEffect, useMemo, useRef } from 'react';
import { getSettingUserColumns } from './constant';
import { getAllUsers, registerUser } from '../../features/user/userSlice';
import { useDispatch, useSelector } from 'react-redux';
import FormModal from '../../components/lib/FormModal';
import SettingUserForm from './Form';

// import CurrentTrainingForm from './Form';

const SettingUsers = () => {
  const dispath = useDispatch();
  const formRef = useRef(null);
  const { users, totalUser } = useSelector((store) => store.user);

  const onAddClick = () => {
    formRef.current?.open();
  };

  const onEditClick = useCallback((data) => {
    formRef.current?.setEdit(data);
  }, []);

  const onViewClick = useCallback((data) => {
    console.log(data, 'onViewData');
  }, []);

  const onEdit = useCallback(async (id, data) => {}, []);

  const onSubmit = useCallback((data) => {
    return dispath(registerUser(data)).unwrap();
  }, []);

  const onDelete = useCallback((data) => {
    console.log(data, 'onDeleteData');
  }, []);

  const columns = useMemo(
    () => getSettingUserColumns(onEditClick, onDelete, onViewClick),
    [onEditClick, onDelete, onViewClick]
  );

  useEffect(() => {
    dispath(getAllUsers());
  }, []);

  return (
    <>
      <PageHeading title={PAGE_USERS.label}>
        <PageButton onAddClick={onAddClick} title={PAGE_USERS.label} />
      </PageHeading>
      <FormModal
        ref={formRef}
        title={PAGE_USERS.label}
        onEdit={onEdit}
        onSubmit={onSubmit}
      >
        {(isEditing) => <SettingUserForm isEditing={isEditing} />}
      </FormModal>
      <Table columns={columns} store={users} />
    </>
  );
};

export default SettingUsers;
