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
  }

  return (
    <div className="App">
      {showIntro && <SplashScreen onStart={() => setShowIntro(false)} />}
      {!showIntro && tasks.map((task, index) => <Task key={index} text={task} />)}
      {!showIntro && <NewTask onAdd={addNewTask} />}
    </div>
  );
}

export default App;
