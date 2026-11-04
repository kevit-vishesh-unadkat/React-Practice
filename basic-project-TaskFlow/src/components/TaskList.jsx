function TaskList({
    tasks,
    deleteTask,
    toggleTask,
    editTask
}){
    return(
        <div className="task-list">
            <h2>Your Task</h2>

            {tasks.length===0?(
                <p className="empty">
                    No tasks Found!
                </p>
            ):(
                tasks.map(task=>(
                    <TaskItem 
                        key={task.id}
                        task={task}
                        deleteTask={deleteTask}
                        toggleTask={toggleTask}
                        editTask={editTask}
                    />
                ))
            )}
        </div>
    )
}

export default TaskList;