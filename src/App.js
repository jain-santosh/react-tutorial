import { useEffect, useState } from "react";
import "./App.css"
import TaskForm from "./TaskForm";
import TaskList from "./TaskList";
import Navbar from "./Navbar";
import TaskDetails from "./TaskDetails";
import ThemeContext from "./ThemeContext";
import useLocalStorage from "./useLocalStorage";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  const [tasks, setTasks] = useLocalStorage("tasks", []);

  const theme = "dark";

  const addTask = (task) => {
    setTasks([...tasks, task]);
  }

  useEffect (() => {
    console.log("Tasks updated: ", tasks);
  }, [tasks]);

  return (
    <ThemeContext.Provider value={theme} >
      <div className="App">
        <BrowserRouter>
        <div className="container">
          <Navbar />
          <Routes>
            <Route path="/" element={<TaskList tasks={tasks}/>} />
            <Route path="/add" element={<TaskForm addTask={addTask} />} />
            <Route path="/tasks/:id" element={<TaskDetails tasks={tasks} />} />
          </Routes>
        </div>
        </BrowserRouter>
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
