import { useState, useEffect, useReducer, useMemo, useCallback, createContext } from "react";

import Navbar from "./components/Navbar";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";
import TaskFilters from "./components/TaskFilters";
import TaskStats from "./components/TaskStats";

import "./App.css";

// Theme Context
export const ThemeContext = createContext();

// Custom Hook
function useLocalStorage(key, initialValue) {
  const [value, setValue] = useState(() => {
    const saved = localStorage.getItem(key);

    return saved ? JSON.parse(saved) : initialValue;
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  return [value, setValue];
}

// Reducer Function
function taskReducer(tasks, action) {
  switch (action.type) {
    case "ADD":
      return [...tasks, action.payload];

    case "DELETE":
      return tasks.filter(task => task.id !== action.payload);

    case "TOGGLE":
      return tasks.map(task =>
        task.id === action.payload
          ? { ...task, completed: !task.completed }
          : task
      );

    case "EDIT":
      return tasks.map(task =>
        task.id === action.payload.id
          ? { ...task, title: action.payload.title }
          : task
      );

    default:
      return tasks;
  }
}

function App() {

  // Load initial tasks from Local Storage
  const [savedTasks] = useLocalStorage("tasks", []);

  // Task State
  const [tasks, dispatch] = useReducer(taskReducer, savedTasks);

  // Search State
  const [search, setSearch] = useState("");

  // Filter State
  const [filter, setFilter] = useState("all");

  // Theme State
  const [theme, setTheme] = useState("light");

  // Save tasks whenever they change
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  // Document title
  useEffect(() => {
    document.title = "TaskFlow | Task Manager";
  }, []);

  // Add Task
  const addTask = useCallback((title) => {
    const newTask = {
      id: crypto.randomUUID(),
      title,
      completed: false
    };

    dispatch({
      type: "ADD",
      payload: newTask
    });
  }, []);

  // Delete Task
  const deleteTask = useCallback((id) => {
    dispatch({
      type: "DELETE",
      payload: id
    });
  }, []);

  // Toggle Task
  const toggleTask = useCallback((id) => {
    dispatch({
      type: "TOGGLE",
      payload: id
    });
  }, []);

  // Edit Task
  const editTask = useCallback((id, title) => {
    dispatch({
      type: "EDIT",
      payload: { id, title }
    });
  }, []);

  // Filter and Search Tasks
  const filteredTasks = useMemo(() => {

    return tasks.filter(task => {

      const matchesSearch = task.title
        .toLowerCase()
        .includes(search.toLowerCase());

      const matchesFilter =
        filter === "all" ||
        (filter === "completed" && task.completed) ||
        (filter === "pending" && !task.completed);

      return matchesSearch && matchesFilter;

    });

  }, [tasks, search, filter]);

  // Theme Toggle
  const toggleTheme = () => {
    setTheme(prev => prev === "light" ? "dark" : "light");
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>

      <div className={`app ${theme}`}>

        <Navbar />

        <main className="container">

          <h1>Task Management Dashboard</h1>

          <p className="subtitle">
            Organize your work and manage your daily tasks.
          </p>

          <TaskStats tasks={tasks} />

          <TaskForm addTask={addTask} />

          <TaskFilters
            filter={filter}
            setFilter={setFilter}
            search={search}
            setSearch={setSearch}
          />

          <TaskList
            tasks={filteredTasks}
            deleteTask={deleteTask}
            toggleTask={toggleTask}
            editTask={editTask}
          />

        </main>

      </div>

    </ThemeContext.Provider>
  );
}

export default App;