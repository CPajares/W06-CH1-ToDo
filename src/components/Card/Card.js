import "./Card.css";

const Card = ({ name, id, state }) => {
  return (
    <>
      <h2>Task:</h2>
      <li className="task">
        <p>{name}</p>
        <p>{state ? "pending" : "finished"}</p>
        <button type="button">update</button>
        <button type="button">delete</button>
      </li>
    </>
  );
};

export default Card;
