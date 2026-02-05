import React from 'react'
import { Outlet } from 'react-router-dom'
import HeaderHome from '../components/HeaderHome'

const HomeTemplate = () => {
    return (
        <div className='home-page'>
            <HeaderHome />
            <div className='content'>
                <Outlet />
            </div>


        </div>
    )
}

export default HomeTemplate