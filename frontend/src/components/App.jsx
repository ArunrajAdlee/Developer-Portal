import { BrowserRouter as Router, Switch } from 'react-router-dom';
import ScrollToTop from './Util/scrollToTop';
import CustomRoute from './Route/customRoute';
import Landing from './Layout/landing';
import Login from './Login/login';
import Register from './Register/register';
import GlobalAlert from './Util/globalAlert';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { startBootstrap } from '../store/actions';
import { CircularProgress, Backdrop } from '@material-ui/core';
import Error404 from './Util/Error404';
import DefaultLayout from './Layout/defaultLayout';
import Dashboard from './Dashboard/dashboard';
import Welcome from './Welcome/welcome';

const App = () => {
  const dispatch = useDispatch();
  const appState = useSelector((state) => state.app);

  useEffect(() => {
    dispatch(startBootstrap());
  }, []);

  return appState.isLoaded ? (
    <Router>
      <section className="app-container">
        <ScrollToTop />
        <GlobalAlert />
        <Switch>
          <CustomRoute path="/login" pageComponent={Login} layoutComponent={Landing} />
          <CustomRoute path="/register" pageComponent={Register} layoutComponent={Landing} />
          <CustomRoute exact path="/dashboard" pageComponent={Dashboard} layoutComponent={DefaultLayout} />
          <CustomRoute exact path="/" pageComponent={Welcome} layoutComponent={DefaultLayout} />
          <CustomRoute pageComponent={Error404} layoutComponent={Landing} />
        </Switch>
      </section>
    </Router>
  ) : (
    <Backdrop open={true}>
      <CircularProgress color="inherit" />
    </Backdrop>
  );
};

export default App;
