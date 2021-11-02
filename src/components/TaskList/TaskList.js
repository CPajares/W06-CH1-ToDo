import { useEffect } from "react";
import useTasks from "../../hooks/useTasks";
import Card from "../Card/Card";

const TaskList = () => {
  const { tasks, loadTasks, deleteTask } = useTasks();

  const clickDeleteTask = (event, id) => {
    deleteTask(id);
    loadTasks();
  };

  return (
    <>
      <ul>
        {tasks.map((task) => (
          <Card
            onclick={(event) => clickDeleteTask(event, task.id)}
            key={task.id}
            name={task.name}
            state={task.state}
            id={task.id}
          />
        ))}
      </ul>
    </>
  );
};

export default TaskList;
