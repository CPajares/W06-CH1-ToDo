import "./Card.css";

const Card = ({ name, state }) => {
  return (
    <>
      <h2>Task:</h2>
      <li className="task">
        <p>{name}</p>
        <p>{state ? "pending" : "finished"}</p>
        <button className="btn btn-primary" type="button">
          update
        </button>
        <button className="btn btn-danger" type="button">
          delete
        </button>
      </li>
    </>
  );
};

export default Card;
