import React, { useEffect, useRef, useState } from "react";
import { useFormik } from "formik";
import { Schema } from "yup";
import { RootState } from "../../slices";
import classNames from "classnames";
import { useSelector, useDispatch } from "react-redux";
import { createTask, updateTask } from "../../services/api";
import { addTaskToState, updateTaskInState } from "../../slices/tasksSlice";
import { setTaskToEdit, setNewTitle, setNewBody } from "../../slices/editTaskSlice";
import Button from "../Button/Button";
import { ReactComponent as AddIcon } from '../../images/add_icon.svg';
import { ReactComponent as SaveIcon } from '../../images/save_icon.svg';
import { ReactComponent as CancelIcon } from '../../images/cancel_icon.svg';
import Error from "../Error/Error";
import { setModal } from "../../slices/modalSlice";
import getNewId from "../../utils/getNewId";
import { Task } from "../../types/Task";
import { Values } from "../../types/Values";

type TaskFormProps = {
  validation: Schema<any>;
  formType: string;
};

const TaskForm: React.FC<TaskFormProps> = ({ validation, formType }) => {
  const dispatch = useDispatch();
  const ref = useRef(null);
  const taskToEdit = useSelector((state: RootState) => state.editTaskInfo.taskToEdit);
  const allTasks = useSelector((state: RootState) => state.tasksInfo.tasks);
  const [updatedTitle, setUpdatedTitle] = useState(taskToEdit?.title);
  const [updatedBody, setUpdatedBody] = useState(taskToEdit?.body)
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    if (formType === 'editTask') {
      if (updatedBody && updatedTitle) {
        dispatch(setNewBody(updatedBody));
        dispatch(setNewTitle(updatedTitle));
      }
    }
  }, [updatedTitle, updatedBody, formType, dispatch])

  const handleAddChannelSubmit = (values: Values, resetForm: Function) => {
    if (values.title && values.body) {
      setIsLoading(true);
      const newTask = {
        title: values.title,
        body: values.body,
      }
      createTask(newTask)
        .then((response) => {
          response.id = getNewId(allTasks);
          console.log(response);
          dispatch(addTaskToState(response));
          setErrorMessage('');
        })
        .catch((error) => {
          setErrorMessage(`Error creating task ${error}`);
        })
        .finally(() => {
          setIsLoading(false);
        });
      resetForm();
    }
    else {
      console.error('Task name or description is not specified');
    }
  }

  const handleEditChannelSubmit = (values: Values) => {
    if (values.title && values.body && taskToEdit?.id) {
      setIsLoading(true);
      const changedTask = {
        title: values.title,
        body: values.body,
      }
      updateTask(changedTask, taskToEdit.id)
        .then((response) => {
          console.log(response);
          response.id = taskToEdit.id;
          dispatch(updateTaskInState(response));
          setErrorMessage('');
        })
        .catch((error) => {
          setErrorMessage(`Error changing task ${error}`);
        })
        .finally(() => {
          setIsLoading(false);
        })
      dispatch(setTaskToEdit(null));
    }
    else {
      console.error('Task name or description is not specified');
    }
  }

  const handleDiscardClick = () => {
    if (taskToEdit?.title !== updatedTitle || taskToEdit?.body !== updatedBody) {
      dispatch(setModal({type: 'discardChanges'}));
    } else {
      dispatch(setTaskToEdit(null));
    }
  }

  const genInitialValues = (): Values => {
    if (formType === 'editTask' && taskToEdit) {
      return {
        title: taskToEdit.title,
        body: taskToEdit.body,
      };
    }
    return { title: '', body: '' };
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
  const { title, body } = formik.values;

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
    touched.title && errors.title ? 'border-red-200' : 'bg-gray-50',
  )

  const taskBodyClasses = classNames(
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
    'overflow-hidden',
    'overflow-ellipsis',
    touched.body && errors.body ? 'border-red-200' : 'bg-gray-50',
  )

  return (
    <form onSubmit={handleSubmit} ref={ref}>
      <div className="grid gap-4 mb-4 grid-cols-2">
        <div className="col-span-2">
          <label
            htmlFor="name"
            className="block mb-2 text-sm text-lg font-bold text-gray-600 dark:text-white"
          >
            Task Name
          </label>
          <input
            type="text"
            name="title"
            id="name"
            className={taskTitleClasses}
            placeholder="Type the name of a task"
            value={title}
            onChange={(e) => {
              handleChange(e);
              if (formType === 'editTask') {
                setUpdatedTitle(e.target.value);
              }
            }
            }
          />
          {errors.title && touched.title && <Error text={errors.title} />}
        </div>
        <div className="col-span-2">
          <label
            htmlFor="body"
            className="block mb-2 text-sm text-lg font-bold text-gray-600 dark:text-white"
          >
            Task Description
          </label>
          <textarea
            id="body"
            rows={4}
            name='body'
            className={taskBodyClasses}
            placeholder="Write the description of a task"
            value={body}
            onChange={(e) => {
              handleChange(e);
              if (formType === 'editTask') {
                setUpdatedBody(e.target.value);
              }
            }
            }
          />
          {errors.body && touched.body && <Error text={errors.body} />}
        </div>
        <div className="item col-span-full">
          {errorMessage && <Error text={errorMessage} />}
        </div>
        <div className="flex item col-span-full">
          {formType === 'addTask' && <Button variant='primary' icon={<AddIcon />} type={'submit'} disabled={isLoading}>Add New Task</Button>}
          {formType === 'editTask' && <Button variant='secondary' icon={<SaveIcon />} type={'submit'} disabled={isLoading}>Save Changes</Button>}
          {formType === 'editTask' && <Button variant='danger' icon={<CancelIcon />} type={'button'} disabled={isLoading} specialClass="ml-4" onClick={handleDiscardClick}>Discard</Button>}
        </div>
      </div>
    </form>
  )
};

export default TaskForm;
