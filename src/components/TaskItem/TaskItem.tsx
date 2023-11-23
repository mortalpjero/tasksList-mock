import React from "react";
import { ReactComponent as DeleteIcon } from '../../images/delete_icon.svg';
import { ReactComponent as EditIcon } from '../../images/edit_icon.svg';

type Task = {
  id: number;
  title: string;
  description: string;
  completed: boolean;
}

const TaskItem: React.FC<{ task: Task }> = ({ task }) => {
  const { id, title, description } = task;
  return (
    <div className="mt-5 bg-gray-100 rounded-2xl p-6" key={id}>
      <div className="flex justify-between">
        <div className="flex">
          <span className="h-2.5 w-2.5 bg-blue-400 rounded-full mt-2.5" />
          <h3 className="ml-2 text-xl font-semibold border-bottom">{title}</h3>
        </div>
        <div className="flex">
          <EditIcon className="text-blue-600 mt-1" />
          <DeleteIcon className="text-red-500 h-8" />
        </div>
      </div>
      <p className="text-gray-600 mt-4">{description}</p>
    </div >
  )
};

export default TaskItem;
