import { loadTasksAction } from "../actions/ActionCreators";

export const loadTasksThunks = () => {
  return async (dispatch) => {
    const response = await fetch("https://wk06todo.herokuapp.com/todo");
    const tasks = await response.json();
    dispatch(loadTasksAction(tasks));
  };
};
