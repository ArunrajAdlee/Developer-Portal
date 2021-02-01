import { combineReducers } from 'redux';
import auth from './auth';
import app from './app';
import globalAlert from './globalAlert';
import profile from './profile';

const rootReducer = combineReducers({
  auth,
  globalAlert,
  app,
  profile,
});

export default rootReducer;
