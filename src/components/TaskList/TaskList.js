import { useEffect } from "react";
import useTasks from "../../hooks/useTasks";
import Card from "../Card/Card";

const TaskList = () => {
  const { tasks, loadTasks } = useTasks();

  useEffect(() => {
    loadTasks();
  }, [loadTasks]);
  return (
    <>
      <ul>
        {tasks.map((task) => (
          <Card
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
