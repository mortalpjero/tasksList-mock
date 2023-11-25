import React, { useEffect } from "react";
import TaskAdder from "../TaskAdder/TaskAdder";
import Divider from "../Divider/Divider";
import TaskContainer from "../TasksContainer/TasksContainer";
import { getTasks } from "../../services/api";
import { setTasks } from "../../slices/tasksSlice";
import { useDispatch } from "react-redux";
import Modal from "../Modal/Modal";

const TaskListWrapper: React.FC = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    getTasks()
      .then((data) => dispatch(setTasks(data.reverse())));
  }, [dispatch]);

  return (
    <main className="flex-grow px-5 md:px-20 lg:px-72 ">
      <TaskAdder />
      <Divider />
      <TaskContainer />
      <Modal />
    </main>
  );
};

export default TaskListWrapper;
