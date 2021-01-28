import React from 'react';
import { Grid, Typography, Button, Card, CardContent, CardActions } from '@material-ui/core';
import collaborate from '../../assets/img/collaborate.png';
import rocket from '../../assets/img/rocket.png';
import profile from '../../assets/img/profile.png';
import forum from '../../assets/img/forum.png';
import job_search from '../../assets/img/job_search.png';

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
        <Grid container alignItems="center" justify="center" className="section launch-postings">
          <Grid item lg={8} xs={12}>
            <Grid item xs={12}>
              <Typography color="inherit" variant="h2">
                Launching your business?
                <Typography variant="subtitle1">Employers can add job postings to find the perfect talent</Typography>
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Button className="spaced-button" variant="contained">
                Check out how to create postings!
              </Button>
            </Grid>
          </Grid>
          <Grid item lg={4} xs={12}>
            <img src={rocket} width="400px" height="auto" />
          </Grid>
        </Grid>
        <Grid container alignItems="center" justify="center" className="section med create-account">
          <Grid item xs={12}>
            <Typography variant="h4">
              Ready to join?
              <Typography variant="subtitle1">Create an account and start participating today</Typography>
            </Typography>
            <Button className="spaced-button" variant="contained">
              Sign-Up
            </Button>
          </Grid>
        </Grid>
        <Grid container alignItems="center" justify="center" className="section large our-future">
          <Grid item xs={12}>
            <Typography variant="h3">
              Dev-Portal is an ongoing project
              <Typography variant="subtitle1">Here is what we are currently working on!</Typography>
            </Typography>
          </Grid>
          <Grid spacing={5} container alignItems="center" justify="center">
            <Grid item xs={12} lg={3}>
              <Card>
                <CardContent>
                  <img src={profile} width="250px" height="auto" />
                  <Typography variant="subtitle2">
                    A fully-fledged profile page where users can display their skills, work history, git repos, and more
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} lg={3}>
              <Card>
                <CardContent>
                  <img src={forum} width="250px" height="auto" />
                  <Typography variant="subtitle2">A forum section where users can post and answer questions</Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} lg={3}>
              <Card>
                <CardContent>
                  <img src={job_search} width="300px" height="auto" />
                  <Typography variant="subtitle2">A job postings page where users post and apply for jobs</Typography>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Grid>
      </div>
    </>
  );
};

export default Welcome;
