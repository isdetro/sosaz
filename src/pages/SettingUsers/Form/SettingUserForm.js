import { Form, Input, Select, Col, Row, DatePicker, Upload } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';
import {
  REQUIRED_FIELD_FILE,
  REQUIRED_FIELD_EMAIL_RULES,
  SETTING_USER_OPTIONS,
} from '../../../utils/forms';

const { Item } = Form;

const SettingUserForm = ({ isEditing }) => {
  return (
    <>
      <Row justify='space-between' style={{ margin: '20px 0px 30px 0px' }}>
        <Col></Col>
        <Col span={10}>
          <Item name='id' style={{ display: 'none' }}>
            <Input />
          </Item>
          <Item name='name' label='Ad' rules={REQUIRED_FIELD_FILE}>
            <Input placeholder='Ad daxil edin' />
          </Item>
          <Item name='surname' label='Soyad' rules={REQUIRED_FIELD_FILE}>
            <Input placeholder='Soyad  daxil edin' />
          </Item>
          <Item name='phone' label='Əlaqə nömrəsi' rules={REQUIRED_FIELD_FILE}>
            <Input />
          </Item>
          <Item name='address' label='Ünvan' rules={REQUIRED_FIELD_FILE}>
            <Input />
          </Item>
        </Col>
        <Col span={10}>
          <Item name='email' label='Email' rules={REQUIRED_FIELD_EMAIL_RULES}>
            <Input />
          </Item>
          <Item name='user_type' label='Səlahiyyət' rules={REQUIRED_FIELD_FILE}>
            <Select options={SETTING_USER_OPTIONS} />
          </Item>
          {/* <Item
            name='birth_date'
            label='Doğum tarixi'
            rules={REQUIRED_FIELD_FILE}
          >
            <DatePicker />
          </Item> */}
          {!isEditing && (
            <>
              <Item name='password' label='Şifrə' rules={REQUIRED_FIELD_FILE}>
                <Input.Password
                  placeholder='Şifrə daxil edin'
                  iconRender={(visible) =>
                    visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
                  }
                />
              </Item>
              <Item
                name='password_confirmation'
                label='Şifrə təsdiqi'
                rules={REQUIRED_FIELD_FILE}
              >
                <Input.Password
                  placeholder='Şifrəni təsdiq edin'
                  iconRender={(visible) =>
                    visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
                  }
                />
              </Item>
            </>
          )}
          <Form.Item label='Şəkil' name='photo'>
            <Upload listType='picture-card'>
              <div>
                <PlusOutlined />
                <div style={{ marginTop: 8 }}>Upload</div>
              </div>
            </Upload>
          </Form.Item>
        </Col>
        <Col></Col>
      </Row>
    </>
  );
};

export default SettingUserForm;
