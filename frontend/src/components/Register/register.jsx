import React from 'react';
import { Box, Grid, CircularProgress } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import { registerStart } from '../../store/actions';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import { CssTextField, CSSButton } from '../Util/StyledComponents/styledComponents';
import { authConstants } from '../../store/constants/index';
import { Redirect } from 'react-router-dom';

const RegisterSchema = Yup.object().shape({
  email: Yup.string().required('E-mail is required').email('E-mail format is invalid'),
  password: Yup.string().required('Password is required').min(3, 'Passmord must have 3 or more characters'),
  name: Yup.string().required('Name is required'),
  confirmPassword: Yup.string()
    .required('Cormfirm Password is required')
    .test('passwords-match', 'Passwords do not match', function (value) {
      return this.parent.password === value;
    }),
});

const Register = () => {
  const dispatch = useDispatch();
  const authState = useSelector((state) => state.auth);

  const handleSubmit = async (values, actions) => {
    const params = { email: values.email, password: values.password, name: values.name };
    dispatch(registerStart(params));
  };

  return (
    <>
      {authState.isAuthenticated ? (
        <Redirect to="/dashboard" />
      ) : (
        <Grid container direction="column" alignItems="center" justify="center" className="login-register-grid">
          <Grid item xs={10} lg={10} md={10}>
            <Box className="login-register-container" bgcolor="text.secondary">
              <h1 className="align-center header">Dev Portal - Sign Up</h1>
              <Formik
                initialValues={{ email: '', password: '', confirmPassword: '', name: '' }}
                validationSchema={RegisterSchema}
                onSubmit={(values, actions) => {
                  actions.setSubmitting(true);
                  handleSubmit(values, actions);
                }}
              >
                {() => (
                  <Form>
                    <Grid container spacing={3}>
                      <Grid item xs={12} md={6}>
                        <CssTextField
                          formikKey="email"
                          label="E-mail"
                          margin="normal"
                          fullWidth
                          InputLabelProps={{
                            shrink: true,
                          }}
                        />
                      </Grid>
                      <Grid item xs={12} md={6}>
                        <CssTextField
                          formikKey="name"
                          label="Name"
                          margin="normal"
                          fullWidth
                          InputLabelProps={{
                            shrink: true,
                          }}
                        />
                      </Grid>
                      <Grid item xs={12} md={6}>
                        <CssTextField
                          formikKey="password"
                          label="Password"
                          margin="normal"
                          type="password"
                          fullWidth
                          InputLabelProps={{
                            shrink: true,
                          }}
                        />
                      </Grid>
                      <Grid item xs={12} md={6}>
                        <CssTextField
                          formikKey="confirmPassword"
                          label="Confirm Password"
                          margin="normal"
                          fullWidth
                          type="password"
                          InputLabelProps={{
                            shrink: true,
                          }}
                        />
                      </Grid>
                    </Grid>
                    <CSSButton color="inherit" variant="outlined" className="btn" type="submit">
                      {authState.registerStatus === authConstants.REGISTER_START ? (
                        <CircularProgress color="primary" size={30} />
                      ) : (
                        'Confirm'
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

export default Register;
