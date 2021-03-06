import { combineReducers } from "redux";
import {reducer as formReducer} from "redux-form";

import userReducer from "./user_reducer";
import alertReducer from "./alert_reducer";

export default combineReducers({
  form: formReducer,
  authUser: userReducer,
  alert: alertReducer
});