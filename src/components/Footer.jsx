import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <footer className='footer py-5'>
            <div className='container'>
                <div className="row">
                    <div className="col-md-4 mb-4 border-end px-md-5">
                        <h4 className='fw-bold fs-2 text-uppercase'>
                            Get help
                        </h4>
                        <ul>
                            <li>
                                <Link to="/">Home</Link>
                            </li>
                            <li>
                                <Link to="/Nike">Nike</Link>
                            </li>
                            <li>
                                <Link to="/Adidas">Adidas</Link>
                            </li>
                            <li>
                                <Link to="/Contact">Contact</Link>
                            </li>
                        </ul>
                    </div>
                    <div className="col-md-4 mb-4 border-end px-md-5">
                        <h4 className='fw-bold fs-2 text-uppercase'>
                            Support
                        </h4>
                        <ul>
                            <li>
                                <Link to="/">About</Link>
                            </li>
                            <li>
                                <Link to="/Contact">Contact</Link>
                            </li>
                            <li>
                                <Link to="/Help">Help</Link>
                            </li>
                            <li>
                                <Link to="/Phone">Phone</Link>
                            </li>
                        </ul>
                    </div>
                    <div className="col-md-4 mb-4 px-md-5">
                        <h4 className='fw-bold fs-2 text-uppercase'>
                            Register
                        </h4>
                        <ul>
                            <li>
                                <Link to="/register">Register</Link>
                            </li>
                            <li>
                                <Link to="/Login">Login</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>

    )
}

export default Footer