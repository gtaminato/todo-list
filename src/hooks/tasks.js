import { useState } from "react";

const useTasks = (tasks) => {
  const [originalTasks, setTasks] = useState(tasks);

  const addTask = task => {
    setTasks([
      ...originalTasks,
      task
    ]);
  };

  const removeTask = task => {
    setTasks([
      ...originalTasks.filter((value, index) => index !== task)
    ]);
  };

  return [
    originalTasks,
    addTask,
    removeTask
  ];
};

export default useTasks;