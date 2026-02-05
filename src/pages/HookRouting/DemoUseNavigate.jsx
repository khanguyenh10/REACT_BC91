import React from 'react'

import { useFormik } from 'formik'
import * as yup from 'yup'
import { useNavigate } from 'react-router-dom';

const DemoUserNavigate = () => {
    const navigate = useNavigate();
    const userLoginForm = useFormik({
        initialValues: {
            email: '',
            password: '',
            fullName: ''
        },
        validationSchema: yup.object().shape({
            email: yup.string().required('email cannot be blank !').matches(/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/, 'email is invalid - abc@gmail.com'),
            password: yup.string('password cannot be blank').matches(/^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_\-+=\[{\]};:'",.<>/?\\|`~]).{8,}$/, 'Password must: \n- Be at least 8 characters\n- Include 1 uppercase letter\n- Include 1 number\n- Include 1 special character'),
            fullName: ''
        }),
        onSubmit: (valueForm) => {
            console.log(valueForm);
            if (valueForm.email == 'cybersoft@gmail.com' && valueForm.password == 'Cybersoft@123') {
                navigate('/profile', {
                    state: {
                        message: `Chúc mừng ${valueForm.email}`
                    }
                });
            } else {
                //thất bại
                navigate('/forgot-pass');
            }
        }
    })


    return (
        <form className='container' onSubmit={userLoginForm.handleSubmit}>
            <div className='w-50 mx-auto card my-5'>
                <div className='card-header bg-dark text-white text-center'>Login</div>
                <div className='card-body'>
                    <div className='form-group'>
                        <label htmlFor="email">Email</label>
                        <input datatype="email" className='form-control' id="email" name="email" value={userLoginForm.values.email} onInput={userLoginForm.handleChange} onBlur={userLoginForm.handleBlur} />
                        <p className='text text-danger'>
                            {userLoginForm.errors.email}
                        </p>
                    </div>
                    <div className='form-group'>
                        <label htmlFor="fullName">FullName</label>
                        <input type='text' className='form-control' id="fullName" name="fullName" value={userLoginForm.values.fullName} onInput={userLoginForm.handleChange} onBlur={userLoginForm.handleBlur} />
                        <p className='text text-danger'>
                            {userLoginForm.errors.fullName}
                        </p>
                    </div>
                    <div className='form-group'>
                        <label htmlFor="password">Password</label>
                        <input datatype="password" type='password' className='form-control' id="password" name="password" value={userLoginForm.values.password} onInput={userLoginForm.handleChange} onBlur={userLoginForm.handleBlur} />
                        <p className='text text-danger' style={{ whiteSpace: "pre-line" }}>
                            {userLoginForm.errors.password}
                        </p>

                    </div>
                </div>
                <div className='card-footer'>
                    <button className='btn btn-dark' type="submit" disabled={!userLoginForm.isValid}>Login</button>
                </div>
            </div>
        </form>
    )



}

export default DemoUserNavigate