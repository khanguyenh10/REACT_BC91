import React from 'react'
import FormItem from '../components/FormItem'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { signUpApi } from '../api/userApi';
import { toastPromise } from '../util/toast';
const Register = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const userForm = useFormik({
        initialValues: {
            email: '',
            name: '',
            password: '',
            passwordConfirm: '',
            phone: '',
            gender: 'true'
        },
        validationSchema: Yup.object({
            email: Yup.string().required('Email không được để trống').email('Email không hợp lệ'),
            name: Yup.string().required('Tên không được để trống'),
            password: Yup.string().required('Mật khẩu không được để trống').matches('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})', 'Mật khẩu phải có ít nhất 8 ký tự, bao gồm chữ hoa, chữ thường và số và ký tự đặc biệt'),
            passwordConfirm: Yup.string().oneOf([Yup.ref('password'), null], 'Xác nhận mật khẩu không đúng'),
            phone: Yup.string().required('Số diện thoại ko được để trống').matches(/(84|0[3|5|7|8|9])+([0-9]{8})\b/g, 'Số diện thoại không hợp lệ'),
        }),
        onSubmit: async (values) => {
            const data = {
                email: values.email,
                name: values.name,
                password: values.password,
                phone: values.phone,
                gender: values.gender
            }
            let response = await toastPromise(signUpApi(data));
            console.log(response)
            setTimeout(() => {
                navigate('/login');
            })
        }
    })
    console.log(userForm.values)
    return (
        <div className='login-page'>
            <div className="container">
                <h1 className=' fs-4 mb-5'>Register</h1>
                <hr className=' bg-secondary border-0' style={{ height: 2 }} />
                <form action="" onSubmit={userForm.handleSubmit}>
                    <div className="row  mt-5 ">
                        <div className="col-md-6  mb-4">
                            <FormItem label='Email' type='email' name="email" placeholder='email' onChange={userForm.handleChange} onBlur={userForm.handleBlur} value={userForm.values.email} />
                            <p className='text-danger'>{userForm.errors.email}</p>
                        </div>
                        <div className="col-md-6  mb-4">
                            <FormItem label='Name' type='text' name="name" placeholder='name' onChange={userForm.handleChange} onBlur={userForm.handleBlur} value={userForm.values.name} />
                            <p className='text-danger'>{userForm.errors.name}</p>
                        </div>
                        <div className="col-md-6 mb-4">
                            <FormItem datatype='password' label='Password' type='password' name="password" placeholder='password' onChange={userForm.handleChange} onBlur={userForm.handleBlur} value={userForm.values.password} />
                            <p className='text-danger'>{userForm.errors.password}</p>
                        </div>
                        <div className="col-md-6 mb-4">
                            <FormItem label='Phone' type='tel' name="phone" placeholder='phone' onChange={userForm.handleChange} onBlur={userForm.handleBlur} value={userForm.values.phone} />
                            <p className='text-danger'>{userForm.errors.phone}</p>
                        </div>
                        <div className="col-md-6 mb-4">
                            <FormItem datatype='password' label='Password confirm' type='password' name="passwordConfirm" placeholder='password confirm' onChange={userForm.handleChange} onBlur={userForm.handleBlur} value={userForm.values.passwordConfirm} />
                            <p className='text-danger'>{userForm.errors.passwordConfirm}</p>
                        </div>
                        <div className='col-md-6 mb-4'>
                            <div className='d-flex gap-4'>
                                <label className="form-label">Gender</label>
                                <div className="form-check d-flex flex-column">
                                    <input className="form-check-input" type="radio" name="gender" id="Male" value={true} onChange={userForm.handleChange} checked={userForm.values.gender == 'true'} />
                                    <label className="form-check-label" htmlFor="Male" style={{ fontWeight: 400, marginLeft: '-3rem', marginTop: '1rem' }}>
                                        Male
                                    </label>
                                </div>
                                <div className="form-check d-flex flex-column">
                                    <input className="form-check-input" type="radio" name="gender" id="Female" value={false} onChange={userForm.handleChange} checked={userForm.values.gender == 'false'} />
                                    <label className="form-check-label" htmlFor="Female" style={{ fontWeight: 400, marginLeft: '-3rem', marginTop: '1rem' }}>
                                        Female
                                    </label>
                                </div>
                            </div>
                            <button type='submit' className='shadow mt-4' disabled={!userForm.isValid || userForm.isSubmitting}>Submit</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Register