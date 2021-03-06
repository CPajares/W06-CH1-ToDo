import useTasks from "../../hooks/useTasks";
import "./Card.css";

const Card = ({ onclick, task }) => {
  const { loadCurrentTask } = useTasks();

  const clickUpdate = (evento) => {
    loadCurrentTask(task);
  };

  return (
    <>
      <h2>Task:</h2>
      <li className="task">
        <p>{task.name}</p>
        <p>{task.state ? "pending" : "finished"}</p>
        <button onClick={clickUpdate} className="btn btn-primary" type="button">
          update
        </button>
        <button onClick={onclick} className="btn btn-danger" type="button">
          delete
        </button>
      </li>
    </>
  );
};

export default Card;
