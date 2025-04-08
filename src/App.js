import './App.css';
import React, { useState } from 'react';
import TaskItem from './Components/TaskItem/TaskItem';
import TaskList from './Components/TaskList/TaskList';

function App() {

const [inputValue, setInputValue] = useState("");
const [tasks, setTasks] = useState([]);

// funtion to handle adding a task

const handleAddTask = () => {
  if (inputValue.trim() === '') {
    return;
  } else {
    setTasks([...tasks, inputValue])
    setInputValue('');
  }
};

// Funtion to delete a task

const handleDeleteTask = (index) => {
  setTasks(tasks.filter((_, i) => i !== index));
}


  return (
    <>
    <h1>TODO LIST</h1>
    <div>
      <input type="text" placeholder="Add a new task..." value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
      <button onClick={handleAddTask}>Add</button>
      {/*InputBar component*/}
    </div>
    <section>
      <TaskList 
        tasks={tasks}
        handleDeleteTask={handleDeleteTask}
      />
      </section>
    </>
  );
}

export default App;
