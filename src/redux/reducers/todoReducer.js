import actionTypes from "../actions/ActionTypes";

const todoReducer = (tasks = [], action) => {
  let newTasks = tasks;
  switch (action.type) {
    case actionTypes.loadTasks:
      newTasks = [...action.tasks];
      break;
    default:
      break;
  }
  return newTasks;
};

export default todoReducer;
