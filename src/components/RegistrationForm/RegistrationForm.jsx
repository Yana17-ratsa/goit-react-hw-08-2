import { Formik, Form, Field } from 'formik';
import { useDispatch } from 'react-redux';
import * as Yup from 'yup';
import { register } from '../../redux/auth/operations';

const FormSchema = Yup.object({
  name: Yup.string()
    .min(3, 'Too short!')
    .max(50, 'Too long!')
    .required('Required!'),
  number: Yup.string()
    .min(3, 'Too short!')
    .max(50, 'Too long!')
    .required('Required!'),
});

export default function RegistrationForm() {
  const dispatch = useDispatch();

  const handleSubmit = (values, actions) => {
    dispatch(register(values));
    actions.resetForm();
  };
  return (
    <Formik
      initialValues={{
        name: '',
        email: '',
        password: '',
      }}
      onSubmit={handleSubmit}
      validationSchema={FormSchema}
    >
      <Form autoComplete='off'>
        <label>
          UserName
          <Field type='text' name='name' />
        </label>
        <label>
          Email
          <Field type='email' name='email' />
        </label>
        <label>
          Password
          <Field type='password' name='password' />
        </label>
        <button type='submit'>Register</button>
      </Form>
    </Formik>
  );
}
