import { Layout } from 'antd';
import style from './Footer.module.scss';

export default function Footer() {
  return (
    <Layout.Footer className={style.footer}>
      <p className={style.copyRight}>
        © «İnnovasiyalar Mərkəzi» - {new Date().getFullYear()} Version 1.0
      </p>
    </Layout.Footer>
  );
}
