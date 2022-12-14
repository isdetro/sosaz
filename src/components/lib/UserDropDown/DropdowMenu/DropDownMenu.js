import { Button, Dropdown, Menu } from 'antd';
import Avatar from '../../Avatar/Avatar';

const DropdownMenu = ({ src, className }) => {
  const menu = (
    <Menu
      items={[
        {
          key: '1',
          label: <Button onClick={() => {}}>Çıxış Et</Button>,
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
