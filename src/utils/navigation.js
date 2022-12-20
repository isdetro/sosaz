import { IoIosPeople } from 'react-icons/io';
import { FaHome, FaUserAlt, FaChartLine } from 'react-icons/fa';
import { RiListUnordered } from 'react-icons/ri';
import { IoSettingsSharp } from 'react-icons/io5';

// parent routler
export const HOME_PATH = '/';
export const ORDERS_PATH = '/orders';
export const WORKERS_PATH = '/workers';
export const CUSTOMERS_PATH = '/customers';
export const REPORT_PATH = '/report';
export const SETTINGS_PATH = '/settings';

// order sehifenin childrenleri
export const ORDER_POPULATİON_PATH = `${ORDERS_PATH}population`;
export const ORDER_NON_POPULATİON_PATH = `${ORDERS_PATH}nonpopulation`;

// workers sehifenin childreneleri
export const WORKER_LIST_PATH = `${WORKERS_PATH}/list`;
export const WORKER_ADDRESS = `${WORKERS_PATH}/address`;

// customers sehifenisin childrenleridi
export const CUSTOMER_POPULATION_PATH = `${CUSTOMERS_PATH}/population`;
export const CUSTOMER_CORPORATE_PATH = `${CUSTOMERS_PATH}/corporate`;

/// settings portalinin childrenleridi
export const SERVICES_PATH = `${SETTINGS_PATH}/questionnaire`;
export const EMAİL_PATH = `${SETTINGS_PATH}/email`;
export const USERS_PATH = `${SETTINGS_PATH}/users`;

// home page
export const PAGE_HOME = {
  label: 'Ana səhifə',
  path: HOME_PATH,
  icon: <FaHome />,
};

// orders
export const PAGE_ORDER_POPULATİON = {
  label: 'Əhali',
  path: ORDER_POPULATİON_PATH,
};

export const PAGE_ORDER_CORPORATE = {
  label: 'Korporativ',
  path: ORDER_NON_POPULATİON_PATH,
};

export const PAGE_ORDERS = {
  label: 'Sifarişlər',
  icon: <RiListUnordered />,
  path: ORDERS_PATH,
  children: [PAGE_ORDER_POPULATİON, PAGE_ORDER_CORPORATE],
};

// workers
export const PAGE_WORKERS_LIST = {
  label: 'İşçilərin siyahısı',
  path: WORKER_LIST_PATH,
};

export const PAGE_WORKERS_ADDRESS = {
  label: 'İşçilərin yeri',
  path: WORKER_ADDRESS,
};

export const PAGE_WORKERS = {
  label: 'Işçilər',
  path: WORKERS_PATH,
  icon: <IoIosPeople />,
  children: [PAGE_WORKERS_LIST, PAGE_WORKERS_ADDRESS],
};

// customers
export const PAGE_CUSTOMER_POPULATION = {
  label: 'Əhali',
  path: CUSTOMER_POPULATION_PATH,
};

export const PAGE_CUSTOMER_CORPORATE = {
  label: 'Korporativ',
  path: CUSTOMER_CORPORATE_PATH,
};

export const PAGE_CUSTOMERS = {
  label: 'Müştərilər',
  path: CUSTOMERS_PATH,
  icon: <FaUserAlt />,
  children: [PAGE_CUSTOMER_POPULATION, PAGE_CUSTOMER_CORPORATE],
};

// page report
export const PAGE_REPORT = {
  label: 'Hesabat',
  path: REPORT_PATH,
  icon: <FaChartLine />,
};

// settings
export const PAGE_SERVICES = {
  label: 'Soraqçalar',
  path: SERVICES_PATH,
};

export const PAGE_EMAIL = {
  label: 'E-mail tənzimləmələri',
  path: EMAİL_PATH,
};

export const PAGE_USERS = {
  label: 'İstifadəçilər',
  path: USERS_PATH,
};

export const PAGE_SETTINGS = {
  label: 'Tənzimləmələr',
  path: SETTINGS_PATH,
  icon: <IoSettingsSharp />,
  children: [PAGE_SERVICES, PAGE_EMAIL, PAGE_USERS],
};

export const PAGES = [
  PAGE_HOME,
  PAGE_ORDERS,
  PAGE_WORKERS,
  PAGE_CUSTOMERS,
  PAGE_REPORT,
  PAGE_SETTINGS,
];
