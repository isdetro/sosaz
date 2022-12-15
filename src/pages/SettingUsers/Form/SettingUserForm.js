import { Form, Input, Select } from 'antd';
import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';
import {
  REQUIRED_FIELD_FILE,
  REQUIRED_FIELD_EMAIL_RULES,
  SETTING_USER_OPTIONS,
} from '../../../utils/forms';

const { Item } = Form;

const SettingUserForm = () => {
  return (
    <>
      <Item name='name' label='Ad' rules={REQUIRED_FIELD_FILE}>
        <Input />
      </Item>
      <Item name='surname' label='Soyad' rules={REQUIRED_FIELD_FILE}>
        <Input />
      </Item>
      <Item name='phone' label='Əlaqə nömrəsi' rules={REQUIRED_FIELD_FILE}>
        <Input />
      </Item>
      <Item name='email' label='Email' rules={REQUIRED_FIELD_EMAIL_RULES}>
        <Input />
      </Item>
      <Item name='user_type' label='Səlahiyyət' rules={REQUIRED_FIELD_FILE}>
        <Select options={SETTING_USER_OPTIONS} />
      </Item>
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
  );
};

export default SettingUserForm;
