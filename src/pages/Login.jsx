import React, { useEffect } from 'react'
import FormItem from '../components/FormItem'
import { Link, useNavigate } from 'react-router-dom'
import { useFormik } from 'formik'
import * as Yup from 'yup';
import { signInApi } from '../api/userApi';
import { signIn } from '../redux/reducer/userReducer';
import { useDispatch, useSelector } from 'react-redux';
import { toastPromise } from '../util/toast';
const Login = () => {
    const userReducer = useSelector(rootState => rootState.userReducer);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const userForm = useFormik({
        initialValues: {
            email: '',
            password: ''
        },
        validationSchema: Yup.object({
            email: Yup.string().required('Email không được để trống').email('Email không hợp lệ'),
            password: Yup.string().required('Mật khẩu không được để trống').matches('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})', 'Mật khẩu phải có ít nhất 8 ký tự, bao gồm chữ hoa, chữ thường và số và ký tự đặc biệt'),
        }),
        onSubmit: async (values) => {
            let response = await toastPromise(signInApi(values), 'Đăng nhập');
            const action = signIn(response.data.content);
            dispatch(action);
            setTimeout(() => {
                navigate('/');
            }, 1000);
        }
    })
    useEffect(() => {
        if (userReducer.isLogined) {
            navigate('/');
        }
    }, [userReducer.isLogined])
    return (
        <div className='login-page'>
            <div className="container">
                <h1 className=' fs-4 mb-5'>Login</h1>
                <hr className=' bg-secondary border-0' style={{ height: 2 }} />
                <form action="" onSubmit={userForm.handleSubmit} >
                    <div className="row justify-content-center mt-5">
                        <div className="col-md-6 col-lg-4 mb-3">
                            <FormItem label='Email' type='email' name="email" placeholder='email' onChange={userForm.handleChange} onBlur={userForm.handleBlur} value={userForm.values.email} />
                            <p className='text-danger'>{userForm.errors.email}</p>
                        </div>
                    </div>
                    <div className="row justify-content-center">
                        <div className="col-md-6 col-lg-4 mb-3">
                            <FormItem datatype='password' label='Password' type='password' name="password" placeholder='password' onChange={userForm.handleChange} onBlur={userForm.handleBlur} value={userForm.values.password} autoComplete='on' />
                            <p className='text-danger'>{userForm.errors.password}</p>
                        </div>
                    </div>
                    <div className="row justify-content-center">
                        <div className="col-md-6 col-lg-4 mb-3">
                            <div className=' d-flex gap-2 justify-content-end align-items-center'>
                                <Link to={'/register'} className=' text-primary '>Register?</Link>
                                <button type='submit' className='shadow' disabled={!userForm.isValid || userForm.isSubmitting}>Login</button>
                            </div>
                            <button className='btn btn-light-primary px-5 py-3 rounded-5 w-100 mt-2'>
                                <div className='d-flex gap-4 gap-md-5 align-items-center '>
                                    <span className='d-flex align-items-center justify-content-center p-2 btn-light text-light-primary rounded-circle fs-2' style={{ width: 35, height: 35 }}>
                                        <i className="fab fa-facebook-f"></i>
                                    </span>
                                    <span className=' fs-2 text-light'>Continue with Google</span>
                                </div>
                            </button>
                        </div>
                    </div>

                </form>

            </div>
        </div>
    )
}

export default Login