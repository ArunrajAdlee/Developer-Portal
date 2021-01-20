import { FormikTextField } from '../formikTextField';
import { withStyles } from '@material-ui/core/styles';
import { Button } from '@material-ui/core';

export const CssTextField = withStyles({
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

export const CSSButton = withStyles({
  root: {
    '&:hover': {
      color: '#64b5f6',
      transition: 'all .2s ease',
    },
  },
})(Button);
