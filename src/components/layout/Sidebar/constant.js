import { PAGES } from '../../../utils/navigation';
import { Link } from 'react-router-dom';

export const getMenuItems = () =>
  PAGES.map((page) => ({
    ...page,
    label:
      page.children !== undefined ? (
        page.label
      ) : (
        <Link to={page.path}>{page.label}</Link>
      ),
    key: page.path,
    children: page.children?.map((child) => ({
      ...child,
      key: child.path,
      label:
        child.children !== undefined ? (
          child?.label
        ) : (
          <Link to={child.path}>{child.label}</Link>
        ),
      children: child?.children?.map((item) => ({
        key: item?.path,
        label:
          item?.children !== undefined ? (
            item?.label
          ) : (
            <Link to={item?.path}>{item.label}</Link>
          ),
      })),
    })),
  }));
