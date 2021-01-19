import { combineReducers } from 'redux';
import auth from './auth';
import globalAlert from './globalAlert';

const rootReducer = combineReducers({
  auth,
  globalAlert,
});

export default rootReducer;
