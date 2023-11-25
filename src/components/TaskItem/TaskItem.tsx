import React from "react";
import { useDispatch } from "react-redux";
import { ReactComponent as DeleteIcon } from '../../images/delete_icon.svg';
import { ReactComponent as EditIcon } from '../../images/edit_icon.svg';
import Button from "../Button/Button";
import { setTaskToRemove } from "../../slices/tasksSlice";
import { setTaskToEdit } from "../../slices/editTaskSlice";
import { setModal } from "../../slices/modalSlice";

type Task = {
  id: number;
  title: string;
  description: string;
  completed: boolean;
}

const TaskItem: React.FC<{ task: Task }> = ({ task }) => {
  const dispatch = useDispatch()
  const { title, description } = task;

  const handleClickEditItem = () => {
    dispatch(setTaskToEdit(task))
  };
  const handleClickRemoveItem = () => {
    dispatch(setTaskToRemove(task))
    dispatch(setModal({ type: 'removeTask' }))
  };

  return (
    <div>
      <div className="flex justify-between">
        <div className="flex">
          <span className="h-2.5 w-2.5 bg-blue-400 rounded-full mt-2.5" />
          <h3 className="ml-2 text-xl font-semibold border-bottom">{title}</h3>
        </div>
        <div className="flex">
          <Button icon={<EditIcon className="text-blue-600" />} variant="actionIcon" type="button" onClick={handleClickEditItem} />
          <Button icon={<DeleteIcon className="text-red-500 h-8" />} variant="actionIcon" type="button" onClick={handleClickRemoveItem} />
        </div>
      </div>
      <p className="text-gray-600 mt-4">{description}</p>
    </div >
  )
};

export default TaskItem;
