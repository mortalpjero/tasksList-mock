import * as Yup from 'yup';

const taskSchema = Yup.object().shape({
  title: Yup.string()
    .required('This filed is required'),
  body: Yup.string()
    .required('This filed is required'),
});

export default taskSchema;
