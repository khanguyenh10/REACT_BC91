import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom';
import useHomePage from './useHomePage';

const MobileHome = () => {
    const { arrProduct } = useHomePage();

    return (
        <div className="container">
            <h3>Get all product page</h3>
            {arrProduct.map(item => {
                return <div className='mt-2' key={item.id}>
                    <div className='d-flex flex-wrap'>
                        <img src={item.image} alt='...' className='w-50' />
                        <div className='w-full'>
                            <h3>{item.name}</h3>
                            <p>{item.description}</p>
                            <NavLink className={'btn btn-dark m-2'} to={`/detail/${item.id}`}>Detail</NavLink>
                        </div>
                    </div>

                </div>
            })}

        </div>
    )
}

export default MobileHome