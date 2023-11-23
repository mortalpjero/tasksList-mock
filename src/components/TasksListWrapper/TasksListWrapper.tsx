import React, { useEffect } from "react";
import TaskAdder from "../TaskAdder/TaskAdder";
import Divider from "../Divider/Divider";
import TaskContainer from "../TasksContainer/TasksContainer";
import { getTasks } from "../../services/api";
import { setTasks } from "../../slices/tasksSlice";
import { useDispatch } from "react-redux";

const TaskListWrapper = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    getTasks()
      .then((data) => dispatch(setTasks(data)));
  }, [dispatch]);

  return (
    <main className="flex-grow px-5 md:px-20 lg:px-48 ">
      <TaskAdder />
      <Divider />
      <TaskContainer />
      <Divider />
    </main>
  );
};

export default TaskListWrapper;
