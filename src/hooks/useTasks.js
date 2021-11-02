import { useCallback } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { loadCurrentTaskAction } from "../redux/actions/ActionCreators";
import {
  createTaskThunks,
  deleteTaskThunks,
  loadTasksThunks,
} from "../redux/thunks";

const useTasks = () => {
  /* const tasks = useSelector((store) => store.tasks);  Con un reducer */

  //Con dos desestructurando >
  const { currentTask, tasks } = useSelector(({ currentTask, tasks }) => ({
    currentTask,
    tasks,
  }));
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

  const loadCurrentTask = (task) => {
    dispatch(loadCurrentTaskAction(task));
  };

  return {
    currentTask,
    tasks,
    loadTasks,
    createTask,
    deleteTask,
    loadCurrentTask,
  };
};

export default useTasks;
