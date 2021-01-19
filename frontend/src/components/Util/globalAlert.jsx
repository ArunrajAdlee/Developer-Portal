import React from 'react';
import Alert from '@material-ui/lab/Alert';
import { useSelector, useDispatch } from 'react-redux';
import { removeAlert, clearAllAlerts } from '../../store/actions';
import { Button } from '@material-ui/core';

const GlobalAlert = () => {
  const alertsArray = useSelector((state) => state.globalAlert);
  const dispatch = useDispatch();

  return (
    <div className="global-alert-container">
      {alertsArray && alertsArray.length > 0 && (
        <>
          {alertsArray.slice(Math.max(alertsArray.length - 3, 0)).map((alert) => (
            <Alert
              onClose={() => dispatch(removeAlert({ id: alert.id }))}
              className="global-alert"
              key={alert.id}
              severity={alert.type}
            >
              {alert.msg}
            </Alert>
          ))}
          <Button
            className="fl-r"
            onClick={() => dispatch(clearAllAlerts())}
            variant="outlined"
            color="secondary"
          >{`Clear All (${alertsArray.length})`}</Button>
        </>
      )}
    </div>
  );
};

export default GlobalAlert;
