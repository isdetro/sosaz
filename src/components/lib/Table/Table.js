import { Table as AntTable } from 'antd';
// import Filter from './Filter';
import style from './Table.module.scss';

export default function Table({ columns, store }) {
  return (
    <>
      {/* <Filter
        filters={store.filters}
        count={store.count}
        columns={columns}
        onSubmit={(data) => {
          return data;
        }}
        onClear={store.clearFilters}
        className={style.container}
      /> */}
      <AntTable
        locale={{
          emptyText: 'Məlumat yoxdur',
        }}
        // scroll={{ x: 1200 }}
        className={style.container}
        dataSource={store.map((item) => {
          return { ...item, key: item.id };
        })}
        columns={columns}
      />
    </>
  );
}
