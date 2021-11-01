import "./Card.css";

const Card = () => {
  return (
    <>
      <h2>Task:</h2>
      <div className="task">
        <p>Go Shopping</p>
        <p>Done</p>
        <button type="button">update</button>
        <button type="button">delete</button>
      </div>
    </>
  );
};

export default Card;
