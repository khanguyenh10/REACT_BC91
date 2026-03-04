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
                                <button type='submit'>Login</button>
                            </div>
                        </div>
                    </div>

                </form>

            </div>
        </div>
    )
}

export default Login