import React from 'react';

import useTasks from '../../hooks/tasks';

import Task from '../task';
import NewTask from '../new-task';

import './styles.scss';

const TasksScreen = () => {
  const [tasks, addTask, removeTask] = useTasks([]);

  return (
    <div className="TasksScreen">
      {tasks.length > 0 && (
        <div className="TasksScreen__list">
          <h1 className="TasksScreen__title">My tasks</h1>
          {tasks.map((task, index) => <Task key={index} text={task} onRemoveTask={() => removeTask(index)} />)}
        </div>
      )}
      <NewTask onAdd={addTask} />
    </div>
  );
};

export default TasksScreen;