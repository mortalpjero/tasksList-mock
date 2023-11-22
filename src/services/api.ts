import axios from "axios";

const API_URL = 'http://localhost:3000/todos';

type Task = {
  id: number,
  title: string,
  description: string,
  completed: boolean,
}

const getTasks = () => {
  return axios.get(API_URL)
  .then((response) => response.data);
}

const createTask = (task: Task) => {
  return axios.post(API_URL, task)
  .then((response) => response.data);
};

const updateTask = (task: Task) => {
  return axios.put(`${API_URL}/${task.id}`, task)
  .then((response) => response.data);
};

const deleteTask = (task: Task) => {
  return axios.delete(`${API_URL}/${task.id}`)
  .then((response) => response.data);
}

export {createTask, updateTask, deleteTask, getTasks};
