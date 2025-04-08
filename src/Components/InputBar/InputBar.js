import App from '../../App.js';
import styles from './InputBar.module.css';
import React from 'react';

function InputBar(props) {
    const {inputValue, setInputValue, handleAddTask} = props;
    return (
        <div className={styles.inputBar}>
            <input
            type='text'
            placeholder='Add a new task...'
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            className={styles.inputField}
            />
            <button 
            onClick={handleAddTask}
            className={styles.addButton}
            >
                Add
            </button>
        </div>
    )
}


export default InputBar;