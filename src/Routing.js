import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Spinner from './components/lib/Spinner';

import {
  PAGE_HOME,
  PAGE_ORDERS,
  PAGE_ORDER_POPULATİON,
  PAGE_ORDER_CORPORATE,
  PAGE_WORKERS,
  PAGE_WORKERS_LIST,
  PAGE_WORKERS_ADDRESS,
  PAGE_CUSTOMERS,
  PAGE_CUSTOMER_POPULATION,
  PAGE_CUSTOMER_CORPORATE,
  PAGE_REPORT,
  PAGE_SETTINGS,
  PAGE_SERVICES,
  PAGE_EMAIL,
  PAGE_USERS,
} from './utils/navigation';

import ProtectedRoute from './components/auth/ProtectedRoute';
import RoleProtectedRoute from './components/auth/RoleProtectedRoute';

const Login = lazy(async () => import('./pages/Login'));
const Main = lazy(async () => import('./components/layout/Main'));
const Home = lazy(async () => import('./pages/Home'));
const Orders = lazy(async () => import('./pages/Orders'));
const OrderPopulation = lazy(async () => import('./pages/OrderPopulation'));
const OrderCorporate = lazy(async () => import('./pages/OrderCorporate'));
const Workers = lazy(async () => import('./pages/Workers'));
const WorkerAddress = lazy(async () => import('./pages/WorkersAddress'));
const WorkerList = lazy(async () => import('./pages/WorkersList'));
const Customers = lazy(async () => import('./pages/Customers'));
const CustomerPopulation = lazy(async () =>
  import('./pages/CustomersPopulation')
);
const CustomerCorporate = lazy(async () => import('./pages/CustomerCorporate'));
const Reports = lazy(async () => import('./pages/Report'));
const Settings = lazy(async () => import('./pages/Setting'));
const SettingServices = lazy(async () => import('./pages/SettingServices'));
const SettingEmail = lazy(async () => import('./pages/SettingEmail'));
const SettingUsers = lazy(async () => import('./pages/SettingUsers'));

export const Routing = () => {
  return (
    <Router>
      <Suspense fallback={<Spinner />}>
        <Routes>
          <Route element={<ProtectedRoute />}>
            <Route path='/' element={<Main />}>
              <Route index element={<Home />} />
              <Route path={PAGE_ORDERS.path} element={<Orders />} />
              <Route
                path={PAGE_ORDER_POPULATİON.path}
                element={<OrderPopulation />}
              />
              <Route
                path={PAGE_ORDER_CORPORATE.path}
                element={<OrderCorporate />}
              />
              <Route path={PAGE_WORKERS.path} element={<Workers />} />
              <Route path={PAGE_WORKERS_LIST.path} element={<WorkerList />} />
              <Route
                path={PAGE_WORKERS_ADDRESS.path}
                element={<WorkerAddress />}
              />
              <Route path={PAGE_CUSTOMERS.path} element={<Customers />} />
              <Route
                path={PAGE_CUSTOMER_POPULATION.path}
                element={<CustomerPopulation />}
              />
              <Route
                path={PAGE_CUSTOMER_CORPORATE.path}
                element={<CustomerCorporate />}
              />
              <Route path={PAGE_REPORT.path} element={<Reports />} />
              <Route path={PAGE_SETTINGS.path} element={<Settings />} />
              <Route path={PAGE_SERVICES.path} element={<SettingServices />} />
              <Route path={PAGE_EMAIL.path} element={<SettingEmail />} />
              <Route path={PAGE_USERS.path} element={<SettingUsers />} />
            </Route>
          </Route>
          <Route path='/administrator' element={<Login />} />
        </Routes>
      </Suspense>
    </Router>
  );
};

export default Routing;
