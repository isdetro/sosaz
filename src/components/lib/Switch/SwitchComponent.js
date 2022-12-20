import React, { useState } from 'react';
import { Switch } from 'antd';
import { useDispatch } from 'react-redux';

const SwitchComponent = ({
  fn,
  id,
  status,
  switchDependency,
  dataDependency,
}) => {
  const dispatch = useDispatch();
  const [state, setState] = useState(false);
  const switchState = switchDependency(status);
  const newStatusData = dataDependency(status);
  const handleChange = () => {
    setState(true);
    dispatch(fn({ id }))
      .unwrap()
      .then(() => {
        setTimeout(() => {
          setState(false);
        }, 1000);
      })
      .catch(() => {
        setTimeout(() => {
          setState(false);
        }, 1000);
      });
  };

  return (
    <Switch
      loading={state}
      checked={switchState}
      checkedChildren='Aktiv'
      unCheckedChildren='Deaktiv'
      onChange={handleChange}
    />
  );
};

export default SwitchComponent;
