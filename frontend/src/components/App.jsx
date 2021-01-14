import { BrowserRouter as Router, Switch } from 'react-router-dom';
import ScrollToTop from './util/scrollToTop';
import CustomRoute from './route/CustomRoute';
import Landing from './layouts/Landing';
import Login from './Login/login';

const App = () => {
  return (
    <Router>
      <ScrollToTop />
      <Switch>
        <CustomRoute path="/login" pageComponent={Login} layoutComponent={Landing} />
      </Switch>
    </Router>
  );
};

export default App;
