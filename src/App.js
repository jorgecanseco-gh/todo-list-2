import './App.css';
import React, { useState } from 'react';

function App() {

const [inputValue, setInputValue] = useState("");
const [tasks, setTasks] = useState([]);

// funtion to handle adding a task

const handleAddTask = (e) => {
  if (inputValue.trim === "") {
    return;
  } else {
    setTasks([...tasks, inputValue])
    setInputValue("");
  }
};

// Funtion to delete a task

const handleDeleteTask = (task, index) => {
  setTasks(tasks.filter((task, i) => i !== index));
}


  return (
    <>
    <h1>TODO LIST</h1>
    <div>
      <input type="text" placeholder="Add a new task..." />
      <button>Add</button>
      {/*InputBar component*/}
    </div>
    <ul> {/* TaskList component */}
      <li>Task 1</li> {/* TaskItem component */}
      <li>Task 2</li> {/* TaskItem component */}
      <li>Task 3</li> {/* TaskItem component */}
    
    </ul>
    </>
  );
}

export default App;
