import React from 'react';
import { Box, Grid, Button, CircularProgress } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUserInfoStart } from '../../store/actions';
import { Formik, Form } from 'formik';
import { FormikTextField } from '../Util/formikTextField';
import * as Yup from 'yup';
import { authConstants } from '../../store/constants/index';
import { Redirect } from 'react-router-dom';

const CssTextField = withStyles({
  root: {
    '& label.MuiFormLabel-root': {
      color: 'white',
    },
    '& label.Mui-focused': {
      color: '#64b5f6',
    },
    '& .MuiInput-underline': {
      '&:before': {
        borderBottomColor: 'white',
      },
      '&:after': {
        borderBottomColor: '#64b5f6',
      },
      '&:hover:not($disabled):not($focused):not($error):before': {
        borderBottom: `1px solid white`,
      },
    },
    '& .MuiInput-root': {
      '& input': {
        borderColor: 'white',
        color: 'white',
      },
    },
  },
})(FormikTextField);

const CSSButton = withStyles({
  root: {
    '&:hover': {
      color: '#64b5f6',
      transition: 'all .2s ease',
    },
  },
})(Button);

const LoginSchema = Yup.object().shape({
  email: Yup.string().required('E-mail is required'),
  password: Yup.string().required('Password is required'),
});

const Login = () => {
  const dispatch = useDispatch();
  const authState = useSelector((state) => state.auth);

  const handleSubmit = async (values, actions) => {
    const params = { email: values.email, password: values.password };
    dispatch(fetchUserInfoStart(params));
  };

  return (
    <>
      {authState.isAuthenticated ? (
        <Redirect to='/dashboard' />
      ) : (
        <Grid
          container
          spacing={0}
          direction='column'
          alignItems='center'
          justify='center'
          className='login-grid'
        >
          <Grid item xs={3}>
            <Box className='login-container' bgcolor='text.secondary'>
              <h1 className='align-center login-header'>Dev Portal</h1>
              <Formik
                initialValues={{ email: '', password: '' }}
                validationSchema={LoginSchema}
                onSubmit={(values, actions) => {
                  actions.setSubmitting(true);
                  handleSubmit(values, actions);
                }}
              >
                {({ isSubmitting }) => (
                  <Form>
                    <CssTextField
                      formikKey='email'
                      label='E-mail'
                      style={{ margin: 15 }}
                      fullWidth
                      margin='normal'
                      InputLabelProps={{
                        shrink: true,
                      }}
                    />
                    <CssTextField
                      formikKey='password'
                      label='Password'
                      style={{ margin: 15 }}
                      fullWidth
                      margin='normal'
                      InputLabelProps={{
                        shrink: true,
                      }}
                    />
                    <CSSButton
                      color='inherit'
                      variant='outlined'
                      className='login-btn'
                      type='submit'
                    >
                      {authState.fetchStatus ===
                      authConstants.FETCH_USERINFO_START ? (
                        <CircularProgress />
                      ) : (
                        'Login'
                      )}
                    </CSSButton>
                  </Form>
                )}
              </Formik>
            </Box>
          </Grid>
        </Grid>
      )}
    </>
  );
};

export default Login;
