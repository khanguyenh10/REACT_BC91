import React from 'react'
import FormItem from '../components/FormItem'
import { Link } from 'react-router-dom'

const Register = () => {
    return (
        <div className='login-page'>
            <div className="container">
                <h1 className=' fs-4 mb-5'>Register</h1>
                <hr className=' bg-secondary border-0' style={{ height: 2 }} />
                <form action="">
                    <div className="row  mt-5 ">
                        <div className="col-md-6  mb-4">
                            <FormItem label='Email' type='email' name="email" placeholder='email' />
                        </div>
                        <div className="col-md-6  mb-4">
                            <FormItem label='Name' type='text' name="name" placeholder='name' />
                        </div>
                        <div className="col-md-6 mb-4">
                            <FormItem datatype='password' label='Password' type='password' name="password" placeholder='password' />
                        </div>
                        <div className="col-md-6 mb-4">
                            <FormItem label='Phone' type='tel' name="phone" placeholder='phone' />
                        </div>
                        <div className="col-md-6 mb-4">
                            <FormItem datatype='password' label='Password confirm' type='password' name="passwordConfirm" placeholder='password confirm' />
                        </div>
                        <div className='col-md-6 mb-4'>
                            <div className='d-flex gap-4'>
                                <label className="form-label">Gender</label>
                                <div className="form-check d-flex flex-column">
                                    <input className="form-check-input" type="radio" name="gender" id="Male" />
                                    <label className="form-check-label" htmlFor="Male" style={{ fontWeight: 400, marginLeft: '-3rem', marginTop: '1rem' }}>
                                        Male
                                    </label>
                                </div>
                                <div className="form-check d-flex flex-column">
                                    <input className="form-check-input" type="radio" name="gender" id="Female" defaultChecked />
                                    <label className="form-check-label" htmlFor="Female" style={{ fontWeight: 400, marginLeft: '-3rem', marginTop: '1rem' }}>
                                        Female
                                    </label>
                                </div>
                            </div>
                            <button type='submit' className='shadow mt-4'>Submit</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Register