import TaskItem from "../TaskItem/TaskItem";
import styles from './TaskList.module.css';
import React from 'react';


function TaskList(props) {
    const {tasks, handleDeleteTask} = props;
    return (
            <ul>
                {tasks.map((task, index) => (
                    <TaskItem key={index} tasks={task} index={index} handleDeleteTask={handleDeleteTask} />
                ))}
            </ul>
    )
}

export default TaskList;