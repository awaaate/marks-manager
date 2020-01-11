import React from "react";

const TaskList = ({ tasks }) => (
    <div>
        {tasks.map((task, idx) => (
            <li key={idx}>
                {task.task} <span>{task.mark}</span>
            </li>
        ))}
    </div>
);

export default TaskList;
