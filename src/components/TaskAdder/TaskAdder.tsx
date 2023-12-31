import React from "react";
import TaskForm from "../TaskForm/TaskForm.tsx";
import validation from '../../utils/validation.ts';

const TaskAdder: React.FC = () => {
  const formType = 'addTask';

  return (
    <div className="mt-5 bg-gray-100 rounded p-5 md:p-5">
      <TaskForm validation={validation} formType={formType} />
    </div>
  )
};

export default TaskAdder;
