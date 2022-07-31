import { combineReducers } from "redux";
import userReducer from "./user";
import usersReducer from "./users";
import postReducer from "./post";

export default combineReducers({
  userReducer,
  usersReducer,
  postReducer,
});
