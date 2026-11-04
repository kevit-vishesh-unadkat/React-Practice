import { useState } from "react";

function TaskForm({addTask}){
    const [title,setTile]=useState("");

    const inputRef=useRef(null);

    const inputId=useId();

    const handleSubmit=()=>{
        e.preventDefault();

        if(!title.trim()){
            alert("plaese enter a task");
            return;
        }
        addTask(title.trim());

        setTile("");

        inputRef.current.focus();
    };

    return (
    <form className="task-form" onSubmit={handleSubmit}>

      <label htmlFor={inputId}>New Task</label>

      <input
        id={inputId}
        ref={inputRef}
        type="text"
        placeholder="Enter your task..."
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <button type="submit">
        Add Task
      </button>

    </form>
  );
}

export default TaskForm;