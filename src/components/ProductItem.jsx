import React, { memo } from 'react'
import { Link, NavLink } from 'react-router-dom';
import ShoeFavorite from './ShoeFavorite';

const ProductItem = (props) => {
    const { imgSrc, title, shortDes, price, to } = props;
    return (
        <div className="card product-item">
            <div className="card-body  p-md-5 pb-md-2">
                <ShoeFavorite />
                <img src={imgSrc} className="card-img-top" alt="..." />
                {/* <Link to={'/detail/1'}> */}
                <h5 className="card-title fw-light">{title}</h5>
                {/* </Link> */}
                <p className="card-text fs-2 fw-light" style={{ color: '#CbC9C9' }}>{shortDes}</p>

            </div>
            <div className='card-footer p-0 d-flex'>
                <Link to={to} className="btn btn-buy" style={{ flex: 1 }}>Buy now</Link>
                <p className='card-price mb-0 text-center ' style={{ flex: 1 }} > {price}$</p>
            </div>
        </div>
    )
}

export default memo(ProductItem);