import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSadTear } from '@fortawesome/free-solid-svg-icons';
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
            <FontAwesomeIcon className="error-image" icon={faSadTear} />
            <h3>404</h3>
            <h3>The page you were looking for cannot be found!</h3>
          </Grid>
        </Grid>
      </div>
    </>
  );
};

export default Error404;
