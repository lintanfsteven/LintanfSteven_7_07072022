import { combineReducers } from "redux";
import userReducer from "./user";
import usersReducer from "./users";
import postReducer from "./post";
import errorReducer from "./error";

export default combineReducers({
  userReducer,
  usersReducer,
  postReducer,
  errorReducer,
});
