import PageButton from '../../components/lib/PageButton';
import PageHeading from '../../components/lib/PageHeading';
import Table from '../../components/lib/Table';
import { PAGE_USERS } from '../../utils/navigation';
import { useCallback, useEffect, useMemo, useRef } from 'react';
import { getSettingUserColumns } from './constant';
import PersonDetail from '../../components/lib/PersonDetail/PersonDetail';
import DetailViewModal from '../../components/lib/DetailViewModal';
import {
  getAllUsers,
  registerUser,
  setUserDetail,
  updateUser,
} from '../../features/user/userSlice';
import { useDispatch, useSelector } from 'react-redux';
import FormModal from '../../components/lib/FormModal';
import SettingUserForm from './Form';
import { settingUserDetailMask } from '../../utils/data_mask';

// import CurrentTrainingForm from './Form';

const SettingUsers = () => {
  const dispath = useDispatch();
  const formRef = useRef(null);
  const detailRef = useRef(null);

  const { users, totalUser, singleUser } = useSelector((store) => store.user);

  const onAddClick = () => {
    formRef.current?.open();
  };

  const onEditClick = useCallback((data) => {
    formRef.current?.setEdit(data);
  }, []);

  const onViewClick = useCallback((id) => {
    dispath(setUserDetail(id));
    detailRef.current?.open();
  }, []);

  const onEdit = useCallback(async (data) => {
    console.log(data?.photo, 'data photo');
    const updateData = { ...data, photo: data?.photo?.file?.originFileObj };
    console.log(updateData, 'updateuser');
    return dispath(updateUser(updateData)).unwrap();
  }, []);

  const onSubmit = useCallback((data) => {
    console.log(data, 'data');
    return dispath(registerUser(data)).unwrap();
  }, []);

  const columns = useMemo(
    () => getSettingUserColumns(onEditClick, onViewClick),
    [onEditClick, onViewClick, users]
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
      <DetailViewModal ref={detailRef}>
        <PersonDetail data={singleUser} dataMask={settingUserDetailMask} />
      </DetailViewModal>
      <Table columns={columns} store={users} />
    </>
  );
};

export default SettingUsers;
