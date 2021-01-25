import React from 'react';
import { Grid } from '@material-ui/core';

const Welcome = () => {
  return (
    <>
      <div className="welcome-container">
        <Grid container alignItems="center" justify="center" className="section small">
          SECTION 1
        </Grid>
        <Grid container alignItems="center" justify="center" className="section dev-or-employer">
          SECTION 2
        </Grid>
        <Grid container alignItems="center" justify="center" className="section med create-account">
          SECTION 3
        </Grid>
        <Grid container alignItems="center" justify="center" className="section our-future">
          SECTION 4
        </Grid>
      </div>
    </>
  );
};

export default Welcome;
