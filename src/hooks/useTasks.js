import { useCallback } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { loadTasksThunks } from "../redux/thunks";

const useTasks = () => {
  const tasks = useSelector((store) => store.tasks);
  const dispatch = useDispatch();

  const loadTasks = useCallback(() => {
    dispatch(loadTasksThunks());
  }, [dispatch]);

  return {
    tasks,
    loadTasks,
  };
};

export default useTasks;
