import React from 'react';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import { makeStyles } from '@material-ui/core/styles';
import InstagramIcon from '@material-ui/icons/Instagram';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.primary.main,
  },
  icon: {
    color: theme.palette.primary.contrastText,
  },
}));

const Footer = () => {
  const classes = useStyles();
  return (
    <div className="footer-content">
      <BottomNavigation className={classes.root}>
        <BottomNavigationAction
          icon={
            <a href="https://www.linkedin.com/in/arunrajadlee/">
              <LinkedInIcon className={classes.icon} />{' '}
            </a>
          }
        />
        <BottomNavigationAction
          icon={
            <a href="https://github.com/ArunrajAdlee">
              <GitHubIcon className={classes.icon} />
            </a>
          }
        />
        <BottomNavigationAction
          icon={
            <a href="https://www.instagram.com/aadlee13/">
              <InstagramIcon className={classes.icon} />
            </a>
          }
        />
      </BottomNavigation>
    </div>
  );
};

export default Footer;
