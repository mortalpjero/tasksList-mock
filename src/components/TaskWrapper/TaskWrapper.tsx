import React from "react";
import { RootState } from "../../slices";
import TaskItem from "../TaskItem/TaskItem";
import TaskForm from "../TaskForm/TaskForm";
import validation from "../../utils/validation";
import { useSelector } from "react-redux";

type Task = {
  id: number;
  title: string;
  description: string;
  completed: boolean;
}

const TaskWrapper: React.FC<{ task: Task }> = ({ task }) => {
  const taskToEdit = useSelector((state: RootState) => state.tasksInfo.taskToEdit);

  return (
    <div className="mt-5 bg-gray-100 rounded-2xl p-6">
      {taskToEdit?.id !== task.id && <TaskItem task={task} />}
      {taskToEdit?.id === task.id && <TaskForm validation={validation} formType="editTask"/>}
    </div>
  )
};

export default TaskWrapper;
