import React, { useEffect, useState } from 'react'
import HeadingTitle from '../components/HeadingTitle'
import FormItem from '../components/FormItem'
import { useSelector } from 'react-redux'
import { Navigate, useNavigate } from 'react-router-dom'
import { toastError, toastPromise } from '../util/toast'
import { getProfileApi, updateProfileApi } from '../api/userApi'
import { useFormik } from 'formik'
import * as Yup from 'yup';
import ShoesFavorite from '../components/ShoesFavorite'
import Line from '../components/ui/Line'
import { formateDate } from '../util/textUtil'
import useUserInfo from '@/hooks/useUserInfo'

const Profile = () => {
    const { isLogined } = useUserInfo();
    const profileForm = useFormik({
        enableReinitialize: true,
        initialValues: {
            ordersHistory: [],
            email: [],
            name: '',
            phone: '',
            // password: '',
            gender: true
        },
        validationSchema: Yup.object({
            email: Yup.string().required('Email không được để trống').email('Email không hợp lệ'),
            name: Yup.string().required('Tên không được để trống'),
            // password: Yup.string().matches('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})', 'Mật khẩu phải có ít nhất 8 ký tự, bao gồm chữ hoa, chữ thường và số và ký tự đặc biệt'),
            phone: Yup.string().required('Số điện thoại ko được để trống').matches(/(84|0[3|5|7|8|9])+([0-9]{8})\b/g, 'Số diện thoại không hợp lệ'),
        }),
        onSubmit: async (values) => {
            await toastPromise(updateProfileApi(values));
        }
    })

    const [ordersHistory, setOrderHistory] = useState([]);

    //lấy infoProfile
    useEffect(() => {
        if (isLogined) {
            const getProfile = async () => {
                try {
                    let response = await getProfileApi();
                    profileForm.setValues({ ...response.data.content, password: response.data.content.password ? response.data.content.password : '' });
                    setOrderHistory(response.data.content.ordersHistory);
                } catch (error) {
                    toastError(error);
                }

            }
            getProfile();
        }
    }, [isLogined])


    if (!isLogined) {
        return <Navigate to={'/login'} />
    }
    return (
        <div className='container'>
            <div className="row">
                <div className="col-md-6">
                    <HeadingTitle title={'Profile'} />
                </div>
                <form action="" className='mt-5' onSubmit={profileForm.handleSubmit} >
                    <div className="row">
                        <div className="col-md-2">
                            <img src="/shoes/avatar.png" alt="" />
                        </div>
                        <div className="col-md-10">
                            <div className="row ">
                                <div className="col-md-6  mb-4">
                                    <FormItem label='Email' type='email' name="email" placeholder='email' onChange={profileForm.handleChange} onBlur={profileForm.handleBlur} value={profileForm.values.email} disabled />
                                    <p className='text-danger'>{profileForm.errors.email}</p>
                                </div>
                                <div className="col-md-6  mb-4">
                                    <FormItem label='Name' type='text' name="name" placeholder='name' onChange={profileForm.handleChange} onBlur={profileForm.handleBlur} value={profileForm.values.name} />
                                    <p className='text-danger'>{profileForm.errors.name}</p>
                                </div>
                                <div className="col-md-6 mb-4">
                                    <FormItem label='Phone' type='tel' name="phone" placeholder='phone' onChange={profileForm.handleChange} onBlur={profileForm.handleBlur} value={profileForm.values.phone} />
                                    <p className='text-danger'>{profileForm.errors.phone}</p>
                                </div>
                                <div className="col-md-6 mb-4">
                                    {/* <FormItem label='Password' type='text' name="password" placeholder='password' onChange={profileForm.handleChange} onBlur={profileForm.handleBlur} value={profileForm.values.password} /> */}
                                    <p className='text-danger'>{profileForm.errors.password}</p>
                                    <div className="row mt-4">
                                        <div className="col-md-8">
                                            <div className='d-flex gap-4'>
                                                <label className="form-label">Gender</label>
                                                <div className="form-check d-flex flex-column">
                                                    <input className="form-check-input" type="radio" name="gender" id="Female"
                                                        value={true} checked={Boolean(profileForm.values.gender) == true} onChange={profileForm.handleChange} />
                                                    <label className="form-check-label" htmlFor="Male" style={{ fontWeight: 400, marginLeft: '-3rem', marginTop: '1rem' }}>
                                                        Male
                                                    </label>
                                                </div>
                                                <div className="form-check d-flex flex-column">
                                                    <input className="form-check-input" type="radio" name="gender" id="Female"
                                                        value={false} checked={Boolean(profileForm.values.gender) == false} onChange={profileForm.handleChange} />
                                                    <label className="form-check-label" htmlFor="Female" style={{ fontWeight: 400, marginLeft: '-3rem', marginTop: '1rem' }}>
                                                        Female
                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-4">
                                            <button type='submit' className='shadow' disabled={!profileForm.isValid || profileForm.isSubmitting}>Submit</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </form>
            </div>
            <Line />
            <div>
                <nav>
                    <div className="nav nav-tabs" id="nav-tab" role="tablist">
                        <button className="nav-link active" id="nav-home-tab" data-bs-toggle="tab" data-bs-target="#nav-home" type="button" role="tab" aria-controls="nav-home" aria-selected="true">Order history</button>
                        <button className="nav-link" id="nav-profile-tab" data-bs-toggle="tab" data-bs-target="#nav-profile" type="button" role="tab" aria-controls="nav-profile" aria-selected="false">Favourite</button>
                    </div>
                </nav>
                <div className="tab-content" id="nav-tabContent">
                    <div className="tab-pane fade show active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab">
                        <ul>
                            {ordersHistory.map((item, index) => {
                                return (
                                    <li className='mb-5' key={index}>
                                        <h3 className='order-date mt-5'>
                                            + Orders have been placed on {formateDate(item.createdAt)}
                                        </h3>
                                        <div
                                            className="table-responsive"
                                        >
                                            <table
                                                className="table "
                                            >
                                                <thead className=' '>
                                                    <tr className=''>
                                                        <th scope="col">order Id</th>
                                                        <th scope="col">order Email</th>
                                                        {/* <th scope="col">img</th>
                                                        <th scope="col">name</th>
                                                        <th scope="col">price</th>
                                                        <th scope="col">quantity</th>
                                                        <th scope="col">total</th> */}
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr className="">
                                                        <td>{item.id}</td>
                                                        <td>{item.email}</td>
                                                        {/* <td>
                                                            <img src='/shoes/thumbnail.png' width={85} />
                                                        </td>
                                                        <td>Product 1</td>
                                                        <td>1000</td>
                                                        <td>
                                                            <input
                                                                type="number"
                                                                className=" text-center bg-secondary mx-3 "
                                                                style={{ width: 100, lineHeight: 1 }}
                                                                placeholder=""
                                                                aria-label="Username"
                                                                aria-describedby="basic-addon1"
                                                                min={1}
                                                                value={1}
                                                                readOnly
                                                            />
                                                        </td>
                                                        <td>
                                                            1000
                                                        </td> */}
                                                    </tr>

                                                </tbody>
                                            </table>
                                        </div>
                                    </li>
                                )
                            })}
                        </ul>
                        {/* <nav aria-label="Page navigation example">
                            <ul className="pagination justify-content-end">
                                <li className="page-item">
                                    <a className="page-link" href="#" aria-label="Previous">
                                        <span aria-hidden="true">«</span>
                                    </a>
                                </li>
                                <li className="page-item active"><a className="page-link" href="#">1</a></li>
                                <li className="page-item"><a className="page-link" href="#">2</a></li>
                                <li className="page-item"><a className="page-link" href="#">3</a></li>
                                <li className="page-item">
                                    <a className="page-link" href="#" aria-label="Next">
                                        <span aria-hidden="true">»</span>
                                    </a>
                                </li>
                            </ul>
                        </nav> */}

                    </div>
                    <div className="tab-pane fade" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab">
                        <ShoesFavorite />
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Profile