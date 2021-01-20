import React from 'react';
import { Box, Grid } from '@material-ui/core';
import { useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';

const Landing = (props) => {
  const authState = useSelector((state) => state.auth);
  const { pageComponent: Component, matchProps } = props;

  return authState.isAuthenticated ? (
    <Redirect to="/dashboard" />
  ) : (
    <>
      <div className="landing-layout-container">
        <Grid container direction="column" alignItems="center" justify="center" className="login-register-grid">
          <Grid item xs={10} lg={10} md={10}>
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
