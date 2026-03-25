import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom';
import useHomePage from './useHomePage';

const DeskTopHome = () => {
    const { arrProduct } = useHomePage();
    return (
        <div className='container'>
            {/* <button className='btn btn-success' onClick={(e) => {
                getAllProductApi();
            }}>Load api</button> */}
            <h3>Get all product page</h3>
            <div className='row'>
                {arrProduct.map((item) => {
                    return <div className='col-md-4 mt-2' key={item.id}>
                        <div className='card'>
                            <img src={item.image} alt='...' />
                            <div className='card-body'>
                                <h3>{item.name}</h3>
                                <p>{item.price}</p>
                                <NavLink to={`/detail/${item.id}`} className='btn btn-success'>Detail</NavLink>
                            </div>
                        </div>
                    </div>
                })}
            </div>
        </div>
    )
}

export default DeskTopHome