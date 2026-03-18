import { useFormik } from 'formik';
import React from 'react'
import { useDispatch } from 'react-redux';
import { postSignInActionThunk } from '../../../redux/reducer/UserReducer';
import * as Yup from "yup";
/**
 * 1. tạo store(state, reducer,....) quản lý user state 
 * 2. tạo UI đăng nhập,
 * 3. tạo action thunk gọi api đăng nhập, sau khi đăng nhập thành công thì lưu thông tin user vào store
 */

const LoginPage = () => {
    const dispatch = useDispatch();
    const formik = useFormik({
        initialValues: {
            email: "",
            password: ""
        },

        validationSchema: Yup.object({
            // email: Yup.string()
            //     .email("Email không hợp lệ")
            //     .required("Bắt buộc nhập"),
            // password: Yup.string()
            //     .min(6, "Tối thiểu 6 ký tự")
            //     .required("Bắt buộc nhập")
        }),

        onSubmit: (values) => {
            // 👉 gọi API login ở đây
            dispatch(postSignInActionThunk(values));
        }
    });
    //điều hướng sau khi đăng nhập thành công
    return (
        <div className="container mt-5" style={{ maxWidth: "400px" }}>
            <h3 className="text-center mb-4">Login</h3>

            <form onSubmit={formik.handleSubmit}>
                {/* EMAIL */}
                <div className="mb-3">
                    <label className="form-label">Email</label>
                    <input
                        name="email"
                        type="text"
                        className={`form-control ${formik.touched.email && formik.errors.email ? "is-invalid" : ""
                            }`}
                        placeholder="Nhập email"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.email}
                    />
                    {formik.touched.email && formik.errors.email && (
                        <div className="invalid-feedback">
                            {formik.errors.email}
                        </div>
                    )}
                </div>

                {/* PASSWORD */}
                <div className="mb-3">
                    <label className="form-label">Password</label>
                    <input
                        name="password"
                        type="password"
                        className={`form-control ${formik.touched.password && formik.errors.password ? "is-invalid" : ""
                            }`}
                        placeholder="Nhập password"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.password}
                    />
                    {formik.touched.password && formik.errors.password && (
                        <div className="invalid-feedback">
                            {formik.errors.password}
                        </div>
                    )}
                </div>

                {/* BUTTON */}
                <button type="submit" className="btn btn-primary w-100">
                    Login
                </button>
            </form>
        </div>
    );
}

export default LoginPage