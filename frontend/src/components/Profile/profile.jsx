import React, { useEffect } from 'react';
import { Avatar, Grid, CircularProgress, Backdrop } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import { profileConstants } from '../../store/constants/index';
import { getProfileStart } from '../../store/actions/index';

const Profile = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth.user);
  const profile = useSelector((state) => state.profile);

  useEffect(() => {
    dispatch(getProfileStart());
  }, []);

  return profile && profile.profileApiStatus !== profileConstants.GET_PROFILE_START ? (
    <div className="profile-container">
      <Grid spacing={0} container alignItems="center" justify="center">
        <Grid item>
          <Avatar alt="User Avatar" src={user.avatar} />
        </Grid>
      </Grid>
    </div>
  ) : (
    <Backdrop open={true}>
      <CircularProgress color="inherit" />
    </Backdrop>
  );
};

export default Profile;
