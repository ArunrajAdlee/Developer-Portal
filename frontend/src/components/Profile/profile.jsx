import React, { useEffect } from 'react';
import { Avatar, Grid, CircularProgress, Backdrop } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import { profileConstants } from '../../store/constants/index';
import { getProfileStart } from '../../store/actions/index';
import { Redirect, useParams } from 'react-router-dom';

const Profile = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth.user);
  const profile = useSelector((state) => state.profile);
  const { userID } = useParams();

  useEffect(() => {
    dispatch(getProfileStart({ userID }));
  }, []);

  return profile.profileApiStatus === profileConstants.GET_PROFILE_SUCCESS ||
    profile.profileApiStatus === profileConstants.GET_PROFILE_FAILURE ? (
    profile.profile ? (
      <div className="profile-container">
        <Grid spacing={0} container alignItems="center" justify="center">
          <Grid item>
            <Avatar alt="User Avatar" src={user.avatar} />
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
