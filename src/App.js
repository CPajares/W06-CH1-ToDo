import { useEffect } from "react";
import "./App.css";
import Form from "./components/Form/Form";
import TaskList from "./components/TaskList/TaskList";
import useTasks from "./hooks/useTasks";

function App() {
  const { loadTasks } = useTasks();
  useEffect(() => {
    loadTasks();
  }, [loadTasks]);

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
