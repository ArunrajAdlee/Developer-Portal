import React from 'react';
import { Grid } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';

const Profile = () => {
  const dispatch = useDispatch();
  const profileApiStatus = useSelector((state) => state.profile.profileApiStatus);

  return (
    <>
      <Grid spacing={0} container alignItems="center" justify="center" className="user-profile-container">
        Profile
      </Grid>
    </>
  );
};

export default Profile;
