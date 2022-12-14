import React, { Suspense } from 'react';
import { Layout } from 'antd';
import { Outlet } from 'react-router-dom';
import Header from './Header';
import Sidebar from './Sidebar';
import style from './Main.module.scss';
import Footer from './Footer';
import Spinner from '../lib/Spinner';

const { Content } = Layout;

export default function Main() {
  return (
    <Layout>
      <Header />
      <Layout>
        <Sidebar />
        <Content>
          <div className={style.contentContainer}>
            <Suspense fallback={<Spinner />}>
              <Outlet />
            </Suspense>
          </div>
          <Footer />
        </Content>
      </Layout>
    </Layout>
  );
}
