import React from 'react';
import { Grid, Typography, Button } from '@material-ui/core';
import collaborate from '../../assets/img/collaborate.png';
import rocket from '../../assets/img/rocket.png';

const Welcome = () => {
  return (
    <>
      <div className="welcome-container">
        <Grid spacing={0} container alignItems="center" justify="center" className="section small">
          <Typography variant="h4">
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
            <Button variant="contained">Find out what people are discussing in our forums!</Button>
          </Grid>
        </Grid>
        <Grid container alignItems="center" justify="center" className="section dev-or-employer">
          <Grid item lg={8} xs={12}>
            <Grid item xs={12}>
              <Typography color="inherit" variant="h2">
                Launching your business?
                <Typography variant="subtitle1">Employers can add job postings to find the perfect talent</Typography>
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Button className="dev-button" variant="contained">
                Check out how to create postings!
              </Button>
            </Grid>
          </Grid>
          <Grid item lg={4} xs={12}>
            <img src={rocket} width="400px" height="auto" />
          </Grid>
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
