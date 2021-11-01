import "./App.css";
import Form from "./components/Form/Form";
import TaskList from "./components/TaskList/TaskList";

function App() {
  return (
    <>
      <div className="App">
        <TaskList />
        <Form />
      </div>
    </>
  );
}

export default App;
