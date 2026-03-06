import React from 'react'
import FormItem from '../components/FormItem'
import { Link } from 'react-router-dom'

const Login = () => {
    return (
        <div className='login-page'>
            <div className="container">
                <h1 className=' fs-4 mb-5'>Login</h1>
                <hr className=' bg-secondary border-0' style={{ height: 2 }} />
                <form action="">
                    <div className="row justify-content-center mt-5">
                        <div className="col-md-6 col-lg-4 mb-3">
                            <FormItem label='Email' type='email' name="email" placeholder='email' />
                        </div>
                    </div>
                    <div className="row justify-content-center">
                        <div className="col-md-6 col-lg-4 mb-3">
                            <FormItem datatype='password' label='Password' type='password' name="password" placeholder='password' />
                        </div>
                    </div>
                    <div className="row justify-content-center">
                        <div className="col-md-6 col-lg-4 mb-3">
                            <div className=' d-flex gap-2 justify-content-end align-items-center'>
                                <Link to={'/register'} className=' text-primary '>Register?</Link>
                                <button type='submit' className='shadow'>Login</button>
                            </div>
                            <button className='btn btn-light-primary px-5 py-3 rounded-5 w-100 mt-2'>
                                <div className='d-flex gap-4 gap-md-5 align-items-center '>
                                    <span className='d-flex align-items-center justify-content-center p-2 btn-light text-light-primary rounded-circle fs-2' style={{ width: 35, height: 35 }}>
                                        <i class="fab fa-facebook-f"></i>
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