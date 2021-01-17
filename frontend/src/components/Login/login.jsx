import React from 'react';
import { Box, Grid, TextField, Button } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

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
})(TextField);

const CSSButton = withStyles({
  root: {
    '&:hover': {
      color: '#64b5f6',
      transition: 'all .2s ease',
    },
  },
})(Button);

const Login = (props) => {
  return (
    <>
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
            <form noValidate autoComplete='off'>
              <CssTextField
                label='E-mail'
                style={{ margin: 15 }}
                fullWidth
                margin='normal'
                InputLabelProps={{
                  shrink: true,
                }}
              />
              <CssTextField
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
              >
                Login
              </CSSButton>
            </form>
          </Box>
        </Grid>
      </Grid>
    </>
  );
};

export default Login;
