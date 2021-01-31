import React from 'react';
import SentimentVeryDissatisfiedIcon from '@material-ui/icons/SentimentVeryDissatisfied';
import { Link } from 'react-router-dom';
import { Grid } from '@material-ui/core';

const Error404 = () => {
  return (
    <>
      <div className="error-page">
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Link to="/" className="header">
              Dev Portal
            </Link>
          </Grid>
          <Grid item xs={12}>
            <SentimentVeryDissatisfiedIcon className="error-image" />
            <h3>404</h3>
            <h3>The page you were looking for cannot be found!</h3>
          </Grid>
        </Grid>
      </div>
    </>
  );
};

export default Error404;
