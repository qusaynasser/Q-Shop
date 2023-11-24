import * as yup from 'yup';
export const registrationSchema = yup.object({
    userName: yup.string().required('user name is required').min(3, 'at least 3 characters').max(30, 'at most 30 characters'),
    email: yup.string().required('email is required').email(),
    password: yup.string().required('password is required').min(3, 'at least 3 characters').max(30, 'at most 30 characters'),
  })
    