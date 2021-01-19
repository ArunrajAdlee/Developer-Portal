import { BrowserRouter as Router, Switch } from 'react-router-dom';
import ScrollToTop from './Util/scrollToTop';
import CustomRoute from './Route/customRoute';
import Landing from './Layout/landing';
import Login from './Login/login';

const App = () => {
  return (
    <Router>
      <section className='app-container'>
        <ScrollToTop />
        <Switch>
          <CustomRoute
            path='/login'
            pageComponent={Login}
            layoutComponent={Landing}
          />
        </Switch>
      </section>
    </Router>
  );
};

export default App;
