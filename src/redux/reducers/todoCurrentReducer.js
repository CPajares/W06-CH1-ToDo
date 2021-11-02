import actionTypes from "../actions/ActionTypes";
import todoReducer from "./todoReducer";

const todoCurrentReducer = (
  currenTask = { isEditing: false, task: {} },
  action
) => {
  let newTask = currenTask;
  switch (action.type) {
    case actionTypes.loadCurrentTask:
      newTask = { task: action.task, isEditing: true };
      break;
    default:
      break;
  }
  return newTask;
};

export default todoCurrentReducer;
