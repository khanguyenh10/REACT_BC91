import { validateYupSchema } from 'formik';
import React from 'react'
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { loginActionApiAsync } from '../redux/reducer/UserLoginReducer';
import { useDispatch } from 'react-redux';
const Login = () => {
    // sử dụng formik để quản lý form login emamil, password
    const dispatch = useDispatch();
    const loginForm = useFormik({
        initialValues: {
            email: '',
            password: ''
        },
        //validation
        validationSchema: Yup.object().shape({
            email: Yup.string().required('Email is required').email('Email is invalid'),
            password: Yup.string().min(6, 'Password must be at least 6 characters').required('Password is required')
        }),
        onSubmit: (values) => {
            // gọi api login ở đây
            console.log(values);
            const action = loginActionApiAsync(values.email, values.password);
            dispatch(action);
        }

    })
    return (
        <div className="container my-5" style={{ maxWidth: "400px" }}>
            <form onSubmit={loginForm.handleSubmit}>
                <div className="mb-3">
                    <label className="form-label">Email</label>
                    <input type="email" name='email' className="form-control" id="exampleInputEmail1" placeholder="Nhập email" value={loginForm.values.email} onChange={loginForm.handleChange} onBlur={loginForm.handleBlur} />
                    <p className="text-danger">{loginForm.errors.email}</p>
                </div>
                <div className="mb-3">
                    <label className="form-label">Password</label>
                    <input type="password" name='password' className="form-control" id="exampleInputPassword1" placeholder="Nhập password" value={loginForm.values.password} onChange={loginForm.handleChange} onBlur={loginForm.handleBlur} />
                    <p className="text-danger">{loginForm.errors.password}</p>
                </div>
                <button type="submit" className="btn btn-primary">Login</button>
            </form>
        </div>
    )
}

export default Login