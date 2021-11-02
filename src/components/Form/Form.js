import { useEffect, useState } from "react";
import useTasks from "../../hooks/useTasks";
import {
  loadCurrentTaskAction,
  loadTasksAction,
} from "../../redux/actions/ActionCreators";

const Form = () => {
  const { currentTask, createTask } = useTasks();

  const initialData = {
    name: "",
    state: true,
  };

  const [newTaskData, setTaskData] = useState(initialData);

  const onChange = (event) => {
    setTaskData({
      ...newTaskData,
      [event.target.id]: event.target.value,
    });
  };

  const onSubmit = (event) => {
    event.preventDefault();
    createTask(newTaskData);
  };

  return (
    <>
      <h2>Form:</h2>
      <form onSubmit={onSubmit}>
        <label htmlFor="name">First name:</label>
        <input
          className="form-control"
          onChange={onChange}
          type="text"
          value={
            currentTask.isEditing ? currentTask.task.name : newTaskData.name
          }
          id="name"
          name="task"
        />
        <br />

        <button className="btn btn-primary" type="submit" value="Submit">
          {currentTask.isEditing ? "edit" : "create"}
        </button>
      </form>
      <pre>{JSON.stringify(currentTask, null, 2)}</pre>
    </>
  );
};

export default Form;
