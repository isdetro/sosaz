import { Button, Space, Tooltip } from 'antd';
import { AiFillEdit, AiFillDelete, AiFillEye } from 'react-icons/ai';

const user_type = {
  0: 'Admin',
  1: 'Usta',
  3: 'User',
  4: 'Hüquqi',
};

export const getSettingUserColumns = (onEditClick, onDelete, onView) => [
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
        <Tooltip placement='top' title='Redaktə et'>
          <Button
            size='small'
            icon={<AiFillEdit />}
            onClick={() => onEditClick(record)}
          />
        </Tooltip>
        <Tooltip placement='top' title='Detallı Baxış'>
          <Button
            size='small'
            icon={<AiFillEye />}
            onClick={() => onView(record)}
          />
        </Tooltip>
        <Tooltip placement='top' title='Sil'>
          <Button
            size='small'
            icon={<AiFillDelete />}
            onClick={() => onDelete(record)}
          />
        </Tooltip>
      </Space>
    ),
  },
];
