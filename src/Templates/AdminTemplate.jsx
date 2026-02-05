import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'

const AdminTemplate = () => {
    return (
        <main className='main'>
            <div className='row m-0 p-0'>
                <div className='col-3 bg-dark text-white m-0 p-0' style={{ height: '100vh' }}>
                    <div className='logo'>
                        <div className='bg-secondary text-white mx-auto p-5 my-5' style={{ width: '50px', height: '50px', borderRadius: '50%', lineHeight: '16px' }}>
                            <NavLink to={'/admin'} style={{ transform: 'translate(-30px, -30px)' }} className="fab fa-accessible-icon display-4 text-white" />

                        </div>
                        <nav className='mt-2 mx-auto w-75' style={{ listStyle: 'none' }}>
                            <li className='m-3'>
                                <NavLink to="/admin/users">User management</NavLink>
                            </li>
                            <li className='m-3'>
                                <NavLink to="/admin/products">Product management</NavLink>
                            </li>
                        </nav>
                    </div>
                </div>
                <div className='col-9 m-0 p-0'>
                    <header className='text-end p-4 bg-dark text-white'>Profile</header>
                    <section className='content container-fluid'>
                        <Outlet />
                    </section>
                </div>
            </div>
        </main>
    )
}

export default AdminTemplate