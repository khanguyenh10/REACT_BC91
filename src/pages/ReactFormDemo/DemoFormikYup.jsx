import { useFormik } from 'formik'
import React from 'react'
import * as yup from 'yup'
const DemoFormikYup = () => {

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
        }
    })
    return (
        <form className='container' onSubmit={userLoginForm.handleSubmit}>
            <div className='w-50 mx-auto card'>
                <div className='card-header bg-dark text-white text-center'>Login</div>
                <div className='card-body'>
                    <div className='form-group'>
                        <label htmlFor="email">Email</label>
                        <input datatype='email' className='form-control' id="email" name="email" value={userLoginForm.values.email} onInput={userLoginForm.handleChange} onBlur={userLoginForm.handleBlur} />
                        <p className='text text-danger'>{userLoginForm.errors.email}</p>
                    </div>

                    <div className='form-group'>
                        <label htmlFor="fullName">FullName</label>
                        <input datatype='name' type='text' className='form-control' id="fullName" name="fullName" value={userLoginForm.values.fullName} onInput={userLoginForm.handleChange} onBlur={userLoginForm.handleBlur} />
                        <p className='text text-danger'>{userLoginForm.errors.fullName}</p>
                    </div>
                    <div className='form-group'>
                        <label htmlFor="password">Password</label>
                        <input datatype='password' className='form-control' id="password" name="password" type='password' value={userLoginForm.values.password} onChange={userLoginForm.handleChange} onBlur={userLoginForm.handleBlur}
                        />
                        <p className='text text-danger'>{userLoginForm.errors.password}</p>
                    </div>
                </div>
                <div className='card-footer'>
                    <button className='btn btn-dark' type="submit" disabled={!userLoginForm.isValid}>Login</button>
                </div>
            </div>
        </form>
    )
}

export default DemoFormikYup