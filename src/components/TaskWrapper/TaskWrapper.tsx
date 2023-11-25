import React, { useRef } from "react";
import { useDispatch } from "react-redux";
import { RootState } from "../../slices";
import TaskItem from "../TaskItem/TaskItem";
import TaskForm from "../TaskForm/TaskForm";
import validation from "../../utils/validation";
import { useSelector } from "react-redux";
import useOutsideClick from "../../utils/useOutsideClick";
import { setModal } from "../../slices/modalSlice";
import { setTaskToEdit } from "../../slices/editTaskSlice";
import { Root } from "react-dom/client";

type Task = {
  id: number;
  title: string;
  description: string;
  completed: boolean;
}

const TaskWrapper: React.FC<{ task: Task }> = ({ task }) => {
  const dispatch = useDispatch();
  const taskToEdit = useSelector((state: RootState) => state.editTaskInfo.taskToEdit);
  const newTitle = useSelector((state: RootState) => state.editTaskInfo.title);
  const newDescription = useSelector((state: RootState) => state.editTaskInfo.description);
  const ref = useRef(null);

  useOutsideClick(ref, () => {
    if (taskToEdit?.id === task.id) {
      if (taskToEdit?.title === newTitle && taskToEdit?.description === newDescription) {
        dispatch(setTaskToEdit(null));
      }
      if (taskToEdit?.title !== newTitle || taskToEdit?.description !== newDescription) {
        dispatch(setModal({ type: 'discardChanges' }));
      }
    }
  })

  return (
    <div className="mt-5 bg-gray-100 rounded-2xl p-6" ref={ref}>
      {taskToEdit?.id !== task.id && <TaskItem task={task} />}
      {taskToEdit?.id === task.id && <TaskForm validation={validation} formType="editTask" />}
    </div>
  )
};

export default TaskWrapper;
