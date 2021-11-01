import { useState } from "react";
import useTasks from "../../hooks/useTasks";

const Form = () => {
  const { tasks, createTask } = useTasks();

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
          onChange={onChange}
          type="text"
          value={newTaskData.name}
          id="name"
          name="task"
        />
        <br />

        <button type="submit" value="Submit">
          Create
        </button>
      </form>
    </>
  );
};

export default Form;
