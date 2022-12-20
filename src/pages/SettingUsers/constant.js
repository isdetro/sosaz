import { Button, Space, Tooltip, Switch } from 'antd';
import { AiFillEdit, AiFillEye } from '../../utils/icons';
import SwitchComponent from '../../components/lib/Switch';
import { changeUserStatus } from '../../features/user/userSlice';

const user_type = {
  0: 'Admin',
  1: 'Usta',
  3: 'User',
  4: 'Hüquqi',
};

export const getSettingUserColumns = (onEditClick, onViewClick) => [
  {
    title: 'Ad',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: 'Soyad',
    dataIndex: 'surname',
    key: 'surname',
  },
  {
    title: 'Əlaqə nömrəsi',
    dataIndex: 'phone',
    key: 'phone',
  },
  {
    title: 'Email',
    dataIndex: 'email',
    key: 'email',
  },
  {
    title: 'Səlahiyyəti',
    dataIndex: 'user_type',
    key: 'user_type',
    render: (text) => <>{user_type[text]}</>,
  },
  {
    title: 'Status',
    dataIndex: 'status',
    key: 'status',
    render: (text) => <>{text === 1 ? 'Aktiv' : 'Deaktiv'}</>,
  },
  {
    title: 'Əməliyyatlar',
    key: 'action',
    width: 130,
    dataIndex: '',
    fixed: 'right',
    render: (record) => (
      <Space size='small' align='center'>
        <Tooltip placement='top' title='Statusu dəyiş'>
          <SwitchComponent
            fn={changeUserStatus}
            id={record.id}
            status={record.status}
            dataDependency={(data) => {
              return data === 1 ? 0 : 1;
            }}
            switchDependency={(data) => {
              return data === 1 ? true : false;
            }}
          />
        </Tooltip>
        <Tooltip placement='top' title='Redaktə et'>
          <Button
            size='small'
            icon={<AiFillEdit />}
            onClick={() => {
              onEditClick({ ...record });
            }}
          />
        </Tooltip>
        <Tooltip placement='top' title='Detallı Baxış'>
          <Button
            size='small'
            icon={<AiFillEye />}
            onClick={() => onViewClick(record.id)}
          />
        </Tooltip>
      </Space>
    ),
  },
];
