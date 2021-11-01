import actionTypes from "./ActionTypes";

export const loadTasksAction = (tasks) => ({
  type: actionTypes.loadTasks,
  tasks,
});
