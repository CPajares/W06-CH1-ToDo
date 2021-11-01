const Form = () => {
  return (
    <>
      <p>Create task</p>
      <form>
        <label htmlFor="task">First name:</label>
        <input type="text" id="fname" name="task" />
        <br />

        <button type="submit" value="Submit">
          Create
        </button>
      </form>
    </>
  );
};

export default Form;
