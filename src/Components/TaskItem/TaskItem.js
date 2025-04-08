import styles from './TaskList.module.css';
import React from 'react';
import App from '../../App.js';


function TaskItem(props) {
    const { tasks, index, handleDeleteTask } = props;
    return (
        <div>
            <li>
                {tasks}
                <span onClick={() => handleDeleteTask(index)}>❌</span>
            </li>
        </div>
    )
}

export default TaskItem;