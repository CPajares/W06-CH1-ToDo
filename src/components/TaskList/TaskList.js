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
            task={task}
          />
        ))}
      </ul>
    </>
  );
};

export default TaskList;
