import React from 'react';
import { CircularProgress } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import { loginStart } from '../../store/actions';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import { authConstants } from '../../store/constants/index';
import { CssTextField, CSSButton } from '../Util/StyledComponents/styledComponents';
import { Link } from 'react-router-dom';

const LoginSchema = Yup.object().shape({
  email: Yup.string().required('E-mail is required').email('E-mail format is invalid'),
  password: Yup.string().required('Password is required'),
});

const Login = () => {
  const dispatch = useDispatch();
  const loginStatus = useSelector((state) => state.auth.loginStatus);

  const handleSubmit = async (values, actions) => {
    const params = { email: values.email, password: values.password };
    dispatch(loginStart(params));
  };

  return (
    <>
      <Link className="align-center header" to="/">
        Dev Portal
      </Link>
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
            <div className="btn">
              <Link className="register-btn" to="/register">
                Sign-up
              </Link>
              <CSSButton color="inherit" variant="outlined" type="submit">
                {loginStatus === authConstants.LOGIN_START ? <CircularProgress color="primary" size={30} /> : 'Login'}
              </CSSButton>
            </div>
          </Form>
        )}
      </Formik>
    </>
  );
};

export default Login;
