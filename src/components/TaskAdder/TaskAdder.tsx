import React from "react";
import TaskForm from "../TaskForm/TaskForm.tsx";
import validation from '../../utils/validation.tsx';

const TaskAdder = () => {
  const formType = 'addTask';

  return (
    <div className="mt-5 bg-gray-100 rounded">
      <TaskForm validation={validation} formType={formType} />
    </div>
  )
};

export default TaskAdder;
