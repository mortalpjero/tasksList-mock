import React from "react"
import { useSelector } from "react-redux"
import { RootState } from "../../slices";
import TaskWrapper from "../TaskWrapper/TaskWrapper";

const TaskContainer = () => {
  const tasks = useSelector((state: RootState) => state.tasksInfo.tasks);
  if (tasks === null) return;
  const constructedTasks = tasks.map((task) => <TaskWrapper key={task.id} task={task} />);

  return (
    <div>
      {constructedTasks}
    </div>
  )
};

export default TaskContainer;
