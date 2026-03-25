import React from 'react'
import { NavLink } from 'react-router-dom'

const BottomTab = () => {
    return (
        <div className='pỵ-3 px-5 text-center bg-dark text-white position-fixed bottom-0 start-0 w-100' style={{ marginTop: 150 }}>
            <div className='w-100 d-flex justify-content-around align-items-center' style={{ height: 80 }}>
                <NavLink to={'/profile'} className={({ isActive }) => isActive ? 'text-warning fs-1' : 'text-white fs-1'} >
                    <i className='fa fa-user-circle'></i>
                </NavLink>
                <NavLink to={'/'} className={({ isActive }) => isActive ? 'text-warning fs-1' : 'text-white fs-1'}>
                    <i className='fa fa-home'></i>
                </NavLink>
                <NavLink to={'/cart'} className={({ isActive }) => isActive ? 'text-warning fs-1' : 'text-white fs-1'}>
                    <i class="fa fa-cart-plus"></i>
                </NavLink>
            </div>



        </div>
    )
}

export default BottomTab