import { useEffect, useState } from 'react';
import {
  Form,
  Input,
  Select,
  Col,
  Row,
  Button,
  Cascader,
  DatePicker,
  InputNumber,
  Radio,
  Switch,
  TreeSelect,
} from 'antd';

import {
  REQUIRED_FIELD_FILE,
  REQUIRED_FIELD_EMAIL_RULES,
  SETTING_USER_OPTIONS,
} from '../../../utils/forms';

const { Item } = Form;

const ServicesForm = ({ isEditing, data }) => {
  const [isMainCategory, setIsMainCategory] = useState(false);

  console.log(isMainCategory, 'isMainCategory');
  const handleChange = (e) => {
    if (e === 0) {
      setIsMainCategory(true);
    } else {
      setIsMainCategory(false);
    }
  };

  const treeSelectData = [
    { key: 0, value: 0, title: 'Əsas kateqoriya' },
    ...data,
  ];

  return (
    <>
      <Row justify='space-between' style={{ margin: '20px 0px 30px 0px' }}>
        <Col span={3}></Col>
        <Col span={18}>
          <Form.Item
            label={`${
              isEditing
                ? 'Redaktə etmək üçün kateqoriya seçin'
                : 'Əsas kateqoriya'
            }`}
            name='parent_id'
          >
            <TreeSelect
              treeData={isEditing ? data : treeSelectData}
              onChange={(e) => handleChange(e)}
              placeholder='Kateqoriya daxil edin'
            />
          </Form.Item>

          <Item
            name='name'
            label={`${
              isEditing
                ? ' Kateqoriya adı'
                : isMainCategory
                ? 'Əsas kateqoriya adı'
                : 'Sub kateqoriya adı'
            }`}
            rules={REQUIRED_FIELD_FILE}
          >
            <Input placeholder='Sub kateqoriya daxil edin' />
          </Item>

          <Item name='price' label='Tarif'>
            <Input placeholder='Qiymət  daxil edin' />
          </Item>
          {/* <Item name='phone' label='Əlaqə nömrəsi' rules={REQUIRED_FIELD_FILE}>
            <Input />
          </Item>
          <Item name='address' label='Ünvan' rules={REQUIRED_FIELD_FILE}>
            <Input />
          </Item> */}
        </Col>
        <Col span={3}></Col>
      </Row>
    </>
  );
};

export default ServicesForm;
