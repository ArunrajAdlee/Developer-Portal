import React from 'react';
import Alert from '@material-ui/lab/Alert';
import { useSelector } from 'react-redux';

const GlobalAlert = () => {
  const alertsArray = useSelector((state) => state.globalAlert);

  return (
    alertsArray &&
    alertsArray.length > 0 &&
    alertsArray.map((alert) => (
      <Alert className='global-alert' key={alert.id} severity={alert.type}>
        {alert.msg}
      </Alert>
    ))
  );
};

export default GlobalAlert;
