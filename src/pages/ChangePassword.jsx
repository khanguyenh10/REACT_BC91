import React, { use, useEffect } from 'react'
import FormItem from '../components/FormItem'
import { Link, Navigate, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { changePasswordApi, signUpApi } from '../api/userApi';
import { toastError, toastPromise, toastSuccess } from '../util/toast';
import { signOut } from '../redux/reducer/userReducer';
import usePostData from '../hooks/usePostData';
import useUserInfo from '@/hooks/useUserInfo';
const ChangePassword = () => {
    const { isLogined } = useUserInfo();
    const { mutate, isLoading, error, data } = usePostData(changePasswordApi)
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const userForm = useFormik({
        initialValues: {
            password: '',
            passwordConfirm: '',
        },
        validationSchema: Yup.object({
            password: Yup.string().required('Mật khẩu không được để trống').matches('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})', 'Mật khẩu phải có ít nhất 8 ký tự, bao gồm chữ hoa, chữ thường và số và ký tự đặc biệt'),
            passwordConfirm: Yup.string().oneOf([Yup.ref('password'), null], 'Xác nhận mật khẩu không đúng'),
        }),
        onSubmit: async (values) => {
            const data = {
                newPassword: values.password,
            }
            mutate(data);
        }
    })
    console.log(userForm.values)



    useEffect(() => {
        if (error) {
            toastError(error);
        }
        if (data) {
            toastSuccess('Đổi mật khẩu thành công');
            setTimeout(() => {
                dispatch(signOut());
            })
        }
    }, [error, data])


    if (!isLogined) {
        return <Navigate to={'/login'} />
    }
    return (
        <div className='login-page'>
            <div className="container">
                <h1 className=' fs-4 mb-5'>Change password</h1>
                <hr className=' bg-secondary border-0' style={{ height: 2 }} />
                <form action="" onSubmit={userForm.handleSubmit}>
                    <div className="row  mt-5  mx-auto" style={{ maxWidth: '44.3rem' }}>

                        <div className="col-md-12 mb-4">
                            <FormItem datatype='password' label='New Password' type='password' name="password" placeholder='password' onChange={userForm.handleChange} onBlur={userForm.handleBlur} value={userForm.values.password} />
                            <p className='text-danger'>{userForm.errors.password}</p>
                        </div>

                        <div className="col-md-12 mb-4">
                            <FormItem datatype='password' label='Password confirm' type='password' name="passwordConfirm" placeholder='password confirm' onChange={userForm.handleChange} onBlur={userForm.handleBlur} value={userForm.values.passwordConfirm} />
                            <p className='text-danger'>{userForm.errors.passwordConfirm}</p>
                        </div>
                        <button type='submit' className='shadow mt-4' disabled={!userForm.isValid || isLoading}>Submit</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default ChangePassword