import './App.css';
import React, { useState } from 'react';
import TaskItem from './Components/TaskItem/TaskItem';
import TaskList from './Components/TaskList/TaskList';
import InputBar from './Components/InputBar/InputBar';

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
      <InputBar 
      inputValue={inputValue}
      setInputValue={setInputValue}
      handleAddTask={handleAddTask}
      />
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
