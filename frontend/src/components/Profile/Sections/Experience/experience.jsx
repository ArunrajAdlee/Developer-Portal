import React, { useEffect, useState } from 'react';
import { Grid, Typography, Button, Icon, IconButton } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import HighlightOffIcon from '@material-ui/icons/HighlightOff';
import EditIcon from '@material-ui/icons/Edit';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import { deleteProfileExperienceStart } from '../../../../store/actions/index';
import ExperienceModal from './experienceModal';

const Experience = (props) => {
  const { currentUserProfile } = props;
  const [modalOpen, setModalOpen] = useState(false);
  const dispatch = useDispatch();
  const profile = useSelector((state) => state.profile);

  const handleClose = () => {
    setModalOpen(false);
  };

  return (
    <>
      <Grid container>
        <Grid item xs={11}>
          <Typography variant="h6">Work Experience</Typography>
        </Grid>
        {currentUserProfile && (
          <Grid item xs={1}>
            <IconButton onClick={() => setModalOpen(true)} color="inherit" edge="start">
              <AddCircleOutlineIcon />
            </IconButton>
          </Grid>
        )}
      </Grid>
      {profile.profile.experience.map((exp) => (
        <div variant="square" className="exp-container">
          <Grid container>
            <Grid item xs={9}>
              <Typography variant="h4">
                {exp.position} @ {exp.company}
              </Typography>
            </Grid>
            {currentUserProfile && (
              <Grid item xs={3}>
                <IconButton color="inherit" edge="start">
                  <EditIcon />
                </IconButton>
                <IconButton
                  onClick={() => dispatch(deleteProfileExperienceStart(exp._id))}
                  color="inherit"
                  edge="start"
                >
                  <HighlightOffIcon />
                </IconButton>
              </Grid>
            )}
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
      <ExperienceModal open={modalOpen} handleClose={handleClose} />
    </>
  );
};

export default Experience;
