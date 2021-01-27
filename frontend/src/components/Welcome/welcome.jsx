import React from 'react';
import { Grid, Typography, Button } from '@material-ui/core';
import collaborate from '../../assets/img/collaborate.png';

const Welcome = () => {
  return (
    <>
      <div className="welcome-container">
        <Grid spacing={0} container alignItems="center" justify="center" className="section small">
          <Typography gutterBottom="false" variant="h4">
            "Competition is the law of the jungle, but cooperation is the law of civiliazation"
            <Typography variant="subtitle1">- Peter Kropotkin</Typography>
          </Typography>
          <Grid item xs={12} className="img-container">
            <img src={collaborate} width="400px" height="auto" />
            <Typography variant="subtitle1">
              Collaborate with fellow developers to fix bugs, debate tough topics, or just chat about the latest
              technologoies
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Button variant="outlined">Find out what people are discussing in our forums!</Button>
          </Grid>
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
