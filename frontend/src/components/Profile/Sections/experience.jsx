import React, { useEffect, useState } from 'react';
import { Avatar, Grid, CircularProgress, Backdrop, Typography, Paper } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect, useParams } from 'react-router-dom';

const Experience = () => {
  const dispatch = useDispatch();
  const profile = useSelector((state) => state.profile);

  return (
    <>
      <Typography variant="h6">Work Experience</Typography>
      {profile.profile.experience.map((exp) => (
        <div variant="square" className="exp-container">
          <Grid container>
            <Grid item xs={12}>
              <Typography variant="h4">
                {exp.position} @ {exp.company}
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography variant="caption">
                {exp.startDate} - {`${exp.isCurrent ? 'Present' : exp.endDate}`}
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography variant="caption">{exp.location}</Typography>
            </Grid>
            <Grid className="body-content" item xs={12}>
              <Typography variant="body">{exp.description}</Typography>
            </Grid>
          </Grid>
        </div>
      ))}
    </>
  );
};

export default Experience;
