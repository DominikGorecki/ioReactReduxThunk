import { combineReducers } from "redux";
import counterReducer from "./counterReducer";
import hiReducer from "./hiReducer";

export default combineReducers({
  clickCounter: counterReducer,
  hiName: hiReducer
});
