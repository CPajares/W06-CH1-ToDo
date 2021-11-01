import { useCallback } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { createTaskThunks, loadTasksThunks } from "../redux/thunks";

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

  return {
    tasks,
    loadTasks,
    createTask,
  };
};

export default useTasks;
