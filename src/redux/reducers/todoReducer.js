import actionTypes from "../actions/ActionTypes";

const todoReducer = (tasks = [], action) => {
  let newTasks = tasks;
  switch (action.type) {
    case actionTypes.loadTasks:
      newTasks = [...action.tasks];
      break;
    case actionTypes.createTask:
      newTasks = [...tasks, action.task];
      break;
    case actionTypes.deleteTask:
      newTasks = tasks.filter((task) => task.id !== action.id);
      break;
    default:
      break;
  }
  return newTasks;
};

export default todoReducer;
