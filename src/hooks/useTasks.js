import { useCallback } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import {
  createTaskThunks,
  deleteTaskThunks,
  loadTasksThunks,
} from "../redux/thunks";

const useTasks = () => {
  const tasks = useSelector((store) => store.tasks);
  const dispatch = useDispatch();

  const loadTasks = useCallback(() => {
    dispatch(loadTasksThunks());
  }, [dispatch]);

  const createTask = useCallback(
    (task) => {
      dispatch(createTaskThunks(task));
    },
    [dispatch]
  );

  const deleteTask = (id) => {
    dispatch(deleteTaskThunks(id));
  };

  return {
    tasks,
    loadTasks,
    createTask,
    deleteTask,
  };
};

export default useTasks;
