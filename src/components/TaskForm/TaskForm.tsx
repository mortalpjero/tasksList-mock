import React from "react";
import { useFormik } from "formik";
import { uniqueId } from "lodash";
import { Schema } from "yup";
import classNames from "classnames";

type TaskFormProps = {
  validation: Schema<any>;
};

const TaskForm: React.FC<TaskFormProps> = ({ validation }) => {
  const initialValues = {
    taskName: '',
    taskDescription: '',
  };

  const formik = useFormik({
    initialValues,
    validationSchema: validation,
    onSubmit: (values) => {
      const newTask = {
        id: uniqueId(),
        name: values.taskName,
        description: values.taskDescription,
      }
      console.log(newTask);
    }
  })

  const { handleChange, handleSubmit, errors, touched } = formik;
  const { taskName, taskDescription } = formik.values;

  const taskNameClasses = classNames(
    'border',
    'border-gray-300',
    'text-gray-900',
    'text-sm',
    'rounded-lg',
    'focus:ring-primary-600',
    'focus:border-primary-600',
    'block',
    'w-full',
    'p-2',
    'dark:bg-gray-600',
    'dark:border-gray-500',
    'dark:placeholder-gray-400',
    'dark:text-white',
    'dark:focus:ring-primary-500',
    'dark:focus:border-primary-500',
    touched.taskName && errors.taskName ? 'border-red-200' : 'bg-gray-50',
  )

  const taskDescriptionClasses = classNames(
    'block',
    'p-2',
    'w-full',
    'text-sm',
    'text-gray-900',
    'rounded-lg',
    'border',
    'border-gray-300',
    'focus:ring-blue-500',
    'focus:border-blue-500',
    'dark:bg-gray-600',
    'dark:border-gray-500',
    'dark:placeholder-gray-400',
    'dark:text-white',
    'dark:focus:ring-blue-500',
    'dark:focus:border-blue-500',
    touched.taskName && errors.taskName ? 'border-red-200' : 'bg-gray-50',
  )

  return (
    <form className="p-4 md:p-5" onSubmit={handleSubmit}>
      <div className="grid gap-4 mb-4 grid-cols-2">
        <div className="col-span-2">
          <label
            htmlFor="name"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Task Name
          </label>
          <input
            type="text"
            name="taskName"
            id="name"
            className={taskNameClasses}
            placeholder="Type the name of a task"
            required={true}
            value={taskName}
            onChange={handleChange}
          />
        </div>
        <div className="col-span-2">
          <label
            htmlFor="description"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Task Description
          </label>
          <textarea
            id="description"
            rows={4}
            name='taskDescription'
            className={taskDescriptionClasses}
            placeholder="Write the description of a task"
            value={taskDescription}
            onChange={handleChange}
          />
        </div>
      </div>
      <button
        type="submit"
        className="text-white inline-flex items-center bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      >
        <svg
          className="me-1 -ms-1 w-5 h-5"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z"
            clipRule="evenodd"
          />
        </svg>
        Add new task
      </button>
    </form>
  )
};

export default TaskForm;
