import { combineReducers } from "redux";
import auth from "./auth";
import app from "./app";
import globalAlert from "./globalAlert";

const rootReducer = combineReducers({
  auth,
  globalAlert,
  app,
});

export default rootReducer;
