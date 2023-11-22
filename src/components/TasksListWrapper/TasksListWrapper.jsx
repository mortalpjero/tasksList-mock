import React from "react";
import TaskAdder from "../TaskAdder/TaskAdder";
import Divider from "../Divider/Divider";

const TaskListWrapper = () => {
  return (
    <main className="flex-grow px-5 md:px-20 lg:px-48 ">
      <TaskAdder />
      <Divider />
    </main>
  );
};

export default TaskListWrapper;
