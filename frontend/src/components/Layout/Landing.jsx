import React from 'react';
import { Box, Grid } from '@material-ui/core';
import { useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import GlobalAlert from '../Util/globalAlert';

const Landing = (props) => {
  const authState = useSelector((state) => state.auth);
  const { pageComponent: Component, matchProps } = props;

  return authState.isAuthenticated ? (
    <Redirect to="/dashboard" />
  ) : (
    <>
      <div className="landing-layout-container">
        <Grid container direction="column" alignItems="center" className="login-register-grid">
          <Grid item xs={4} className="alert-section">
            <GlobalAlert />
          </Grid>
          <Grid item xs={8} sm={7} md={7} lg={7} xl={10}>
            <Box className="login-register-container" bgcolor="text.secondary">
              <Component {...matchProps} />
            </Box>
          </Grid>
        </Grid>
      </div>
    </>
  );
};

export default Landing;
