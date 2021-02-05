import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { makeStyles } from '@material-ui/core/styles';
import { useSelector, useDispatch } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import { logoutStart } from '../../store/actions';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    color: 'inherit',
    textDecoration: 'none',
  },
}));

const Nav = () => {
  const auth = useSelector((state) => state.auth);
  const classes = useStyles();
  const dispatch = useDispatch();
  const history = useHistory();

  const logout = () => {
    dispatch(logoutStart());
    history.push('/');
  };

  return (
    <AppBar color="primary" position="static">
      <Toolbar>
        <IconButton color="inherit" edge="start" className={classes.menuButton} aria-label="menu">
          <MenuIcon />
        </IconButton>
        <Link className={classes.title} to={`/`}>
          <Typography variant="h6">Dev-Portal</Typography>
        </Link>
        {auth.isAuthenticated ? (
          <>
            <Link className="link-no-styles" to={`/profile/${auth.user._id}`}>
              <Button color="inherit">My Profile</Button>
            </Link>
            <Button onClick={logout} color="inherit">
              Logout
            </Button>
          </>
        ) : (
          <Link className="link-no-styles" to="/login">
            <Button color="inherit">Login</Button>
          </Link>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Nav;
