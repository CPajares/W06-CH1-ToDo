import {
  createTaskAction,
  deleteTaskAction,
  loadTasksAction,
} from "../actions/ActionCreators";

export const loadTasksThunks = () => {
  return async (dispatch) => {
    const response = await fetch("https://wk06todo.herokuapp.com/todo");
    const tasks = await response.json();
    dispatch(loadTasksAction(tasks));
  };
};

export const createTaskThunks = (task) => {
  return async (dispatch) => {
    const response = await fetch("https://wk06todo.herokuapp.com/todo", {
      method: "POST",
      body: JSON.stringify(task),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const newTasks = await response.json();

    dispatch(createTaskAction(newTasks));
  };
};

export const deleteTaskThunks = (id) => {
  return async (dispatch) => {
    const response = await fetch(`https://wk06todo.herokuapp.com/todo/${id}`, {
      method: "DELETE",
    });

    if (response.ok) {
      dispatch(deleteTaskAction(id));
    }
  };
};
