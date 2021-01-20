import React from 'react';
import { Box, Grid, CircularProgress } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import { loginStart } from '../../store/actions';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import { authConstants } from '../../store/constants/index';
import { CssTextField, CSSButton } from '../Util/StyledComponents/styledComponents';
import { Redirect } from 'react-router-dom';

const LoginSchema = Yup.object().shape({
  email: Yup.string().required('E-mail is required').email('E-mail format is invalid'),
  password: Yup.string().required('Password is required'),
});

const Login = () => {
  const dispatch = useDispatch();
  const authState = useSelector((state) => state.auth);

  const handleSubmit = async (values, actions) => {
    const params = { email: values.email, password: values.password };
    dispatch(loginStart(params));
  };

  return (
    <>
      {authState.isAuthenticated ? (
        <Redirect to="/dashboard" />
      ) : (
        <Grid
          container
          spacing={0}
          direction="column"
          alignItems="center"
          justify="center"
          className="login-register-grid"
        >
          <Grid item xs={10} lg={5} md={6}>
            <Box className="login-register-container" bgcolor="text.secondary">
              <h1 className="align-center header">Dev Portal</h1>
              <Formik
                initialValues={{ email: '', password: '' }}
                validationSchema={LoginSchema}
                onSubmit={(values, actions) => {
                  actions.setSubmitting(true);
                  handleSubmit(values, actions);
                }}
              >
                {() => (
                  <Form>
                    <CssTextField
                      formikKey="email"
                      label="E-mail"
                      fullWidth
                      margin="normal"
                      InputLabelProps={{
                        shrink: true,
                      }}
                    />
                    <CssTextField
                      formikKey="password"
                      label="Password"
                      fullWidth
                      type="password"
                      margin="normal"
                      InputLabelProps={{
                        shrink: true,
                      }}
                    />
                    <CSSButton color="inherit" variant="outlined" className="btn" type="submit">
                      {authState.loginStatus === authConstants.LOGIN_START ? (
                        <CircularProgress color="primary" size={30} />
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
