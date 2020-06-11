import React, { useState } from 'react';
import SplashScreen from './components/splash-screen';
import Task from './components/task';
import NewTask from './components/new-task';

import './App.css';

const App = () => {

  const [showIntro, setShowIntro] = useState(true);
  const [tasks, setTasks] = useState([]);

  const addNewTask = task => {
    setTasks([
      ...tasks,
      task
    ]);
  };

  const removeTask = task => {
    setTasks([
      ...tasks.filter((value, index) => index !== task)
    ]);
  };

  return (
    <div className="App">
      {showIntro && <SplashScreen onStart={() => setShowIntro(false)} />}
      {!showIntro && tasks.map((task, index) => <Task key={index} text={task} onRemoveTask={() => removeTask(index)} />)}
      {!showIntro && <NewTask onAdd={addNewTask} />}
    </div>
  );
}

export default App;
