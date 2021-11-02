import { combineReducers } from "redux";
import todoCurrentReducer from "./todoCurrentReducer";
import todoReducer from "./todoReducer";

const rootReducer = combineReducers({
  tasks: todoReducer,
  currentTask: todoCurrentReducer,
});

export default rootReducer;
