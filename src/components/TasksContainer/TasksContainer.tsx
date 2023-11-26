import React from "react"
import { useSelector } from "react-redux"
import { RootState } from "../../slices";
import TaskWrapper from "../TaskWrapper/TaskWrapper";

const TaskContainer: React.FC = () => {
  const tasks = useSelector((state: RootState) => state.tasksInfo.tasks);
  if (tasks.length <= 0) {
    return null;
  };

  const constructedTasks = tasks.map((task) => <TaskWrapper key={task.id} task={task} />);

  return (
    <div>
      {constructedTasks}
    </div>
  )
};

export default TaskContainer;
