function TaskItem({
    task,
    deleteTask,
    toggleTask,
    editTask
}){
    const [isEditing,setIsEditing]=useState(false);

    const [editTitle,setEditTitle]=useState(task.title);

    const handleEdit = () => {

    if (!editTitle.trim()) {
      alert("Task title cannot be empty!");
      return;
    }

    editTask(task.id,editTitle.trim());

    setIsEditing(false);
};
    return (
    <div className="task-item">

      <div className="task-content">

        <input
          type="checkbox"
          checked={task.completed}
          onChange={() => toggleTask(task.id)}
        />

        {isEditing ? (

          <input
            type="text"
            value={editTitle}
            onChange={(e) => setEditTitle(e.target.value)}
          />

        ) : (

          <span
            className={task.completed ? "completed" : ""}
          >
            {task.title}
          </span>

        )}

      </div>

      <div className="task-actions">

        {isEditing ? (

          <button onClick={handleEdit}>
            Save
          </button>

        ) : (

          <button onClick={() => setIsEditing(true)}>
            Edit
          </button>

        )}

        <button onClick={() => deleteTask(task.id)}>
          Delete
        </button>

      </div>

    </div>
  );
}

export default TaskItem;