import UserDropDown from '../../lib/UserDropDown/UserDropDown';
import { Layout } from 'antd';
import style from './Header.module.scss';

export default function Header() {
  return (
    <Layout.Header className={style.container}>
      <h1 className={style.title}>SOSAZ</h1>
      <UserDropDown />
    </Layout.Header>
  );
}
