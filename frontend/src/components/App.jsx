import { BrowserRouter as Router, Switch } from 'react-router-dom';
import ScrollToTop from './Util/scrollToTop';
import CustomRoute from './Route/customRoute';
import Landing from './Layout/landing';
import Login from './Login/login';
import GlobalAlert from './Util/globalAlert';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { startBootstrap } from '../store/actions';
import { CircularProgress, Backdrop } from '@material-ui/core';

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
