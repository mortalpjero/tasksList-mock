import axios from "axios";

const API_URL = 'http://localhost:3000/todos';

type NewTask = {
  title: string,
  description: string,
  completed: boolean,
}

type ExistingTask = NewTask & {
  id: string,
}

const getTasks = () => {
  return axios.get(API_URL)
    .then((response) => response.data);
}

const createTask = (task: NewTask) => {
  return axios.post(API_URL, task)
    .then((response) => response.data);
};

const updateTask = (task: ExistingTask) => {
  return axios.put(`${API_URL}/${task.id}`, task)
    .then((response) => response.data);
};

const deleteTask = (task: ExistingTask) => {
  return axios.delete(`${API_URL}/${task.id}`)
    .then((response) => response.data);
}

export { createTask, updateTask, deleteTask, getTasks };
