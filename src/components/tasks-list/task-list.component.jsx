import React from "react";

import './task-list.styles.scss'
const TaskList = ({ tasks }) => (
    <ul className="task-list">
        {tasks.map((task, idx) => (
            <li key={idx}>
                {task.task} <span className="note">{task.mark}</span>
            </li>
        ))}
    </ul>
);

export default TaskList;
