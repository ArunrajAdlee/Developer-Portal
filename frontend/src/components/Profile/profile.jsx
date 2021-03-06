import React, { useEffect, useState } from 'react';
import { Avatar, Grid, CircularProgress, Backdrop, Typography } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import { profileConstants } from '../../store/constants/index';
import { getProfileStart } from '../../store/actions/index';
import { Redirect, useParams } from 'react-router-dom';
import Experience from './Sections/Experience/experience';

const Profile = () => {
  const dispatch = useDispatch();
  const profile = useSelector((state) => state.profile);
  const auth = useSelector((state) => state.auth);
  const [currentUserProfile, setCurrentUserProfile] = useState(false);
  const { userID } = useParams();

  useEffect(() => {
    if (auth.user && auth.user._id === userID) {
      setCurrentUserProfile(true);
    }
    dispatch(getProfileStart({ userID }));
  }, []);

  return profile.profileApiStatus === profileConstants.GET_PROFILE_SUCCESS ||
    profile.profileApiStatus === profileConstants.GET_PROFILE_FAILURE ? (
    profile.profile ? (
      <div className="profile-container">
        <Grid className="profile-section" container alignItems="center">
          <Grid item xs={12} lg={4}>
            <Avatar alt="User Avatar" src={profile.profile.user.avatar} />
          </Grid>
          <Grid item xs={12} lg={8}>
            <Typography variant="h2">{profile.profile.user.name}</Typography>
            <Typography variant="subtitle1">{`${profile.profile.status} @ ${profile.profile.company}`}</Typography>
            <Typography variant="subtitle1">{profile.profile.location}</Typography>
          </Grid>
        </Grid>
        <Grid className="profile-section" container alignItems="center">
          <Grid item xs={12}>
            <Experience currentUserProfile={currentUserProfile} />
          </Grid>
        </Grid>
        <Grid className="profile-section" container alignItems="center">
          <Grid item xs={12}></Grid>
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
    ) : currentUserProfile ? (
      <h1> Set up your profile</h1>
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
