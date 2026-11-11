import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import {
  addTodo,
  deleteTodo,
  editTodo,
  toggleTodo,
} from "./features/todos/todoSlice";

function App1() {
  const todos = useSelector((state) => state.todos.todos);

  const dispatch = useDispatch();

  const [title, setTitle] = useState("");
  const [editId, setEditId] = useState(null);
  const [editTitle, setEditTitle] = useState("");
  const [filter, setFilter] = useState("all");

  // Add Todo
  const handleAdd = () => {
    if (!title.trim()) return;

    dispatch(addTodo(title));
    setTitle("");
  };

  // Edit Todo
  const handleEdit = (todo) => {
    setEditId(todo.id);
    setEditTitle(todo.title);
  };

  const handleSave = () => {
    if (!editTitle.trim()) return;

    dispatch(
      editTodo({
        id: editId,
        title: editTitle,
      })
    );

    setEditId(null);
    setEditTitle("");
  };

  // Filter Todos
  const filteredTodos = todos.filter((todo) => {
    if (filter === "completed") return todo.completed;
    if (filter === "pending") return !todo.completed;

    return true;
  });

  return (
    <div>
      <h1>Redux Toolkit Todo App</h1>

      {/* Add Todo */}
      <input
        type="text"
        placeholder="Enter todo"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <button onClick={handleAdd}>Add Todo</button>

      <hr />

      {/* Filters */}
      <button onClick={() => setFilter("all")}>All</button>

      <button onClick={() => setFilter("pending")}>
        Pending
      </button>

      <button onClick={() => setFilter("completed")}>
        Completed
      </button>

      <hr />

      {/* Todo List */}
      {filteredTodos.map((todo) => (
        <div key={todo.id}>
          {editId === todo.id ? (
            <>
              <input
                value={editTitle}
                onChange={(e) => setEditTitle(e.target.value)}
              />

              <button onClick={handleSave}>Save</button>

              <button onClick={() => setEditId(null)}>
                Cancel
              </button>
            </>
          ) : (
            <>
              <span
                style={{
                  textDecoration: todo.completed
                    ? "line-through"
                    : "none",
                }}
              >
                {todo.title}
              </span>

              <button
                onClick={() => dispatch(toggleTodo(todo.id))}
              >
                {todo.completed ? "Undo" : "Complete"}
              </button>

              <button onClick={() => handleEdit(todo)}>
                Edit
              </button>

              <button
                onClick={() => dispatch(deleteTodo(todo.id))}
              >
                Delete
              </button>
            </>
          )}
        </div>
      ))}

      {filteredTodos.length === 0 && <p>No todos found.</p>}
    </div>
  );
}

export default App1;