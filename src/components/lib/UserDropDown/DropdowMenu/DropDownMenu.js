import { Button, Dropdown, Menu } from 'antd';
import Avatar from '../../Avatar/Avatar';
import { logoutUser } from '../../../../features/user/UserSlice';
import { useDispatch } from 'react-redux';

const DropdownMenu = ({ src, className }) => {
  const dispatch = useDispatch();

  const handleLogout = () => {
    setTimeout(() => {
      dispatch(logoutUser('Sistemden uğurla çıxış edildi'));
    }, 1000);
  };

  const menu = (
    <Menu
      items={[
        {
          key: '1',
          label: <Button onClick={handleLogout}>Çıxış Et</Button>,
        },
      ]}
    />
  );
  return (
    <Dropdown overlay={menu} placement='bottom'>
      <Avatar size={'large'} className={className} src={src} />
    </Dropdown>
  );
};

export default DropdownMenu;
