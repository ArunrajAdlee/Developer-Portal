import React, { useEffect } from 'react';
import { Avatar, Grid, CircularProgress, Backdrop, Typography } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import { profileConstants } from '../../store/constants/index';
import { getProfileStart } from '../../store/actions/index';
import { Redirect, useParams } from 'react-router-dom';

const Profile = () => {
  const dispatch = useDispatch();
  const profile = useSelector((state) => state.profile);
  const { userID } = useParams();

  useEffect(() => {
    dispatch(getProfileStart({ userID }));
  }, []);

  return profile.profileApiStatus === profileConstants.GET_PROFILE_SUCCESS ||
    profile.profileApiStatus === profileConstants.GET_PROFILE_FAILURE ? (
    profile.profile ? (
      <div className="profile-container">
        <Grid className="profile-section" container alignItems="center">
          <Grid item xs={12} sm={4}>
            <Avatar alt="User Avatar" src={profile.profile.user.avatar} />
          </Grid>
          <Grid item xs={12} sm={8}>
            <Typography variant="h2">{profile.profile.user.name}</Typography>
            <Typography variant="subtitle1">{`${profile.profile.status} @ ${profile.profile.company}`}</Typography>
            <Typography variant="subtitle1">{profile.profile.location}</Typography>
          </Grid>
        </Grid>
        <Grid className="profile-section" container alignItems="center">
          <Grid item xs={12}>
            <Typography variant="h5">Experience</Typography>
          </Grid>
        </Grid>
        <Grid className="profile-section" container alignItems="center">
          <Grid item xs={12}>
            <Typography variant="h5">Education</Typography>
          </Grid>
        </Grid>
        <Grid className="profile-section" container alignItems="center">
          <Grid item xs={12}>
            <Typography variant="h5">Skills</Typography>
          </Grid>
        </Grid>
        <Grid className="profile-section" container alignItems="center">
          <Grid item xs={12}>
            <Typography variant="h5">GitHub</Typography>
          </Grid>
        </Grid>
      </div>
    ) : (
      <Redirect to="/404" />
    )
  ) : (
    <Backdrop open={true}>
      <CircularProgress color="inherit" />
    </Backdrop>
  );
};

export default Profile;
