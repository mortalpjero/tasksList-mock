import React from "react";
import { useFormik } from "formik";
import { Schema } from "yup";
import { RootState } from "../../slices";
import classNames from "classnames";
import { useSelector, useDispatch } from "react-redux";
import { createTask, updateTask } from "../../services/api";
import { addTaskToState, updateTaskInState, setTaskToEdit } from "../../slices/tasksSlice";
import Button from "../Button/Button";
import { ReactComponent as AddIcon } from '../../images/add_icon.svg';
import { ReactComponent as SaveIcon } from '../../images/save_icon.svg';

type TaskFormProps = {
  validation: Schema<any>;
  formType: string;
};

interface Values {
  id?: number | undefined;
  taskTitle: string | undefined;
  taskDescription: string | undefined;
  completed: boolean;
}

const TaskForm: React.FC<TaskFormProps> = ({ validation, formType }) => {
  const dispatch = useDispatch();
  const taskToEdit = useSelector((state: RootState) => state.tasksInfo.taskToEdit);

  const handleAddChannelSubmit = (values: Values, resetForm: Function) => {
    if (values.taskTitle && values.taskDescription) {
      const newTask = {
        title: values.taskTitle,
        description: values.taskDescription,
        completed: false,
      }
      createTask(newTask)
        .then((response) => {
          dispatch(addTaskToState(response))
        })
        .catch((error) => {
          console.error('Error creating task', error);
        })
      resetForm();
    }
    else {
      console.error('Task name or description is not specified');
    }
  }

  const handleEditChannelSubmit = (values: Values) => {
    if (values.taskTitle && values.taskDescription && taskToEdit?.id) {
      const changedTask = {
        title: values.taskTitle,
        description: values.taskDescription,
        completed: false,
      }
      updateTask(changedTask, taskToEdit.id)
        .then((response) => {
          dispatch(updateTaskInState(response))
        })
        .catch((error) => {
          console.error('Error changing task', error);
        })
        dispatch(setTaskToEdit(null));
    }
    else {
      console.error('Task name or description is not specified or task id is missing');
    }
  }


  const genInitialValues = (): Values => {
    if (formType === 'editTask') {
      return {
        taskTitle: taskToEdit?.title,
        taskDescription: taskToEdit?.description,
        completed: taskToEdit?.completed || false
      };
    }
    return { taskTitle: '', taskDescription: '', completed: false };
  };
  const initialValues = genInitialValues();

  const formik = useFormik({
    initialValues,
    validationSchema: validation,
    onSubmit: (values, { resetForm }) => {
      if (formType === 'addTask') {
        return handleAddChannelSubmit(values, resetForm);
      }
      if (formType === 'editTask') {
        return handleEditChannelSubmit(values);
      }
      console.error('Unknown Form Format');
    }
  })

  const { handleChange, handleSubmit, errors, touched } = formik;
  const { taskTitle, taskDescription } = formik.values;

  const taskTitleClasses = classNames(
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
    touched.taskTitle && errors.taskTitle ? 'border-red-200' : 'bg-gray-50',
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
    touched.taskTitle && errors.taskTitle ? 'border-red-200' : 'bg-gray-50',
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
            name="taskTitle"
            id="name"
            className={taskTitleClasses}
            placeholder="Type the name of a task"
            required={true}
            value={taskTitle}
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
        {formType === 'addTask' && <Button type='addTask' icon={<AddIcon />}>Add New Task</Button>}
        {formType === 'editTask' && <Button type='editTask' icon={<SaveIcon />}>Save Changes</Button>}
      </div>
      <></>
    </form>
  )
};

export default TaskForm;
