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
  body: string;
}

const TaskItem: React.FC<{ task: Task }> = ({ task }) => {
  const dispatch = useDispatch()
  const { title, body } = task;

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
        <div>
          <h3 className="md:text-xl sm:text-sm font-semibold border-bottom">
            <span className="inline-block h-2.5 w-2.5 bg-blue-400 rounded-full flex-shrink-0 mr-2" />
            {title}
          </h3>
        </div>
        <div className="flex pl-2">
          <Button icon={<EditIcon className="text-blue-600" />} variant="actionIcon" type="button" onClick={handleClickEditItem} />
          <Button icon={<DeleteIcon className="text-red-500 h-8" />} variant="actionIcon" type="button" onClick={handleClickRemoveItem} />
        </div>
      </div>
      <p className="text-gray-600 mt-4 pr-4">{body}</p>
    </div>
  )
};

export default TaskItem;
