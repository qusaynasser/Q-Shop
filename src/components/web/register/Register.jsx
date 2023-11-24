import React from 'react'
import Input from '../../pages/Input.jsx'
import { useFormik } from 'formik';
import { registrationSchema } from '../validation/validate.js';
import axios from 'axios';
import { toast } from 'react-toastify';
export default function Register() {
  const initialValues = {
    userName: '',
    email: '',
    password: '',
    image: ''
  }
  const handelFieldChange = (event) => {
    formik.setFieldValue('image', event.target.files[0]);
  }

 


  const onSubmit = async users => {
    const formData = new FormData();
    formData.append('userName', users.userName);
    formData.append('email', users.email);
    formData.append('password', users.password);
    formData.append('image', users.image);

    const {data}= await axios.post(`https://ecommerce-node4.vercel.app/auth/signup`,formData);
    if(data.message =='success'){
      formik.resetForm();
      toast(' account created successfully , please confirm your email', {
        position: "botom-center",
        autoClose: false,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        });
    }

    console.log(data);
  }


  
  const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema: registrationSchema
  });
  const inputs = [
    {
      id: 'username',
      type: 'text',
      name: 'userName',
      title: 'user Name',
      value: formik.values.userName,
    },
    {
      id: 'email',
      type: "email",
      name: 'email',
      title: 'user Email',
      value: formik.values.email,
    },
    {
      id: 'password',
      type: 'password',
      name: 'password',
      title: 'user Password',
      value: formik.values.password,
    },
    {
      id: 'image',
      type: 'file',
      name: 'image',
      title: 'user image',
      onChange: handelFieldChange
    }
  ];
  const renderInputs = inputs.map((input, index) =>
    <Input
      type={input.type}
      id={input.id}
      name={input.name}
      title={input.title}
      value={input.value}
      key={index}
      errors={formik.errors}
      onChange={ input.onChange || formik.handleChange }
      onBlur={formik.handleBlur}
      touched={formik.touched}
    />
  )
  return (
    <>
      <div className="container pt-4 d ">
        <div>  <h2 className='text-center mt-5'>Create Account</h2></div>
        <div className=' mt-5 d-flex justify-content-center'>

          <form onSubmit={formik.handleSubmit} encType="multipart/form-data">
            {renderInputs}
            <button className="btn btn-primary" disabled={!formik.isValid} type="submit">Register</button>
          </form>
        </div>

      </div>

    </>
  )
}
