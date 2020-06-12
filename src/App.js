import React, { useState } from 'react';

import useTasks from './hooks/tasks';

import SplashScreen from './components/splash-screen';
import Task from './components/task';
import NewTask from './components/new-task';

import './App.css';

const App = () => {

  const [showIntro, setShowIntro] = useState(true);
  const [tasks, addTask, removeTask] = useTasks([]);

  return (
    <div className="App">
      {showIntro && <SplashScreen onStart={() => setShowIntro(false)} />}
      {!showIntro && tasks.map((task, index) => <Task key={index} text={task} onRemoveTask={() => removeTask(index)} />)}
      {!showIntro && <NewTask onAdd={addTask} />}
    </div>
  );
}

export default App;
