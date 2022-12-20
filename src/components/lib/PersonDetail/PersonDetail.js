import React from 'react';
import { Avatar } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import style from './person-detail.module.scss';
import { dataMaskToDataConverter } from '../../../utils/util_functions';

const PersonDetail = ({ data, img, dataMask }) => {
  const newData = dataMaskToDataConverter(data, dataMask);
  return (
    <>
      <div className={style.personDetailContainer}>
        <div>
          {img ? 'placeholer' : <Avatar size={140} icon={<UserOutlined />} />}
        </div>
        <div className={style.detailRow}>
          {newData.map((item, index) => {
            return (
              <div className={style.detailField} key={index}>
                <div className={style.fieldName}>{item[0]}</div>
                <div className={style.fieldValue}>{item[1]}</div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default PersonDetail;
