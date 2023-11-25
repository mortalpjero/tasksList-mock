import * as Yup from 'yup';

const taskSchema = Yup.object().shape({
  taskTitle: Yup.string()
    .required('This filed is required'),
  taskDescription: Yup.string()
    .required('This filed is required'),
});

export default taskSchema;
