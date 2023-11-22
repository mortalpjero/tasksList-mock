import React from "react";
import TaskForm from "../TaskForm/TaskForm.tsx";
import validation from './validation.tsx';

const TaskAdderModalTrigger = () => {
  return (
    <div className="mt-5 bg-gray-100 rounded">
      <TaskForm validation={validation} />
    </div>
  )
};

export default TaskAdderModalTrigger;
