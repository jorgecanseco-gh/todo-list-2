import styles from './TaskList.module.css';
import React from 'react';
import App from '../../App.js';


function TaskItem(props) {
    const { tasks, index, handleDeleteTask } = props;
    return (
        <div>
            <li>
                {tasks}
            </li>
            <span onClick={() => handleDeleteTask(index)}>X</span>
        </div>
    )
}

export default TaskItem;