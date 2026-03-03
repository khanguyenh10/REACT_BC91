import React from 'react'
import { Link, Links, NavLink } from 'react-router-dom'

const Header = () => {
    return (
        <header className='header'>
            <nav className="navbar navbar-expand-sm navbar-light bg-transparent pt-0 pb-3">
                <div className="w-100">
                    <div className='d-flex justify-content-between d-md-none '>
                        <Link className="navbar-brand d-md-none" href="/">
                            <img src='/shoes/logo.png' />
                        </Link>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavId" aria-controls="collapsibleNavId" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon bg-white display-5" />
                        </button>
                    </div>

                    <div className="collapse navbar-collapse flex-wrap" id="collapsibleNavId">
                        <div className="bg-dark w-100">
                            <div className="container">
                                <div className='d-flex py-2 justify-content-between '>
                                    <Link className="navbar-brand d-none d-md-block" href="/">
                                        <img src='/shoes/logo.png' />
                                    </Link>
                                    <ul className='list-unstyled d-flex gap-2 align-items-center'>
                                        <li>
                                            <Link to={'/search'} className='text-decoration-none text-white fs-30 fw-bold'>
                                                <i className="fa fa-search"></i>
                                                <span className='fw-light ms-2'>Search</span>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to={'/carts'} className='text-decoration-none text-white '>
                                                <img src='/shoes/cart.png' />
                                                <span className='fs-2 ms-2'>(1)</span>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to={'/login'} className='text-decoration-none text-white '>
                                                <span className='fw-light ms-2'>Login</span>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to={'/register'} className='text-decoration-none text-white '>
                                                <span className='fw-light ms-2'>Register</span>
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>

                        </div>
                        <div className="container bg-light " >
                            <ul className="navbar-nav me-auto mt-2 mt-lg-0 ">
                                <li className="nav-item">
                                    <NavLink to={'/'} className={({ isActive }) => isActive ? "nav-link active" : "nav-link "} href="#" aria-current="page">
                                        Home
                                    </NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink to={'/search'} className={({ isActive }) => isActive ? "nav-link active" : "nav-link "} href="#" aria-current="page">
                                        Search
                                    </NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink to={'/woman'} className={({ isActive }) => isActive ? "nav-link active" : "nav-link "} href="#" aria-current="page">
                                        Woman
                                    </NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink to={'/kid'} className={({ isActive }) => isActive ? "nav-link active" : "nav-link "} href="#" aria-current="page">
                                        Kid
                                    </NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink to={'/sport'} className={({ isActive }) => isActive ? "nav-link active" : "nav-link "} href="#" aria-current="page">
                                        Sport
                                    </NavLink>
                                </li>
                            </ul>
                        </div>



                    </div>
                </div>
            </nav>
        </header>

    )
}

export default Header
