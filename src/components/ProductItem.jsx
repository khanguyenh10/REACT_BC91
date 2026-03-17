import React, { memo } from 'react'
import { Link, NavLink } from 'react-router-dom';
import ShoeFavoriteIcon from './ShoeFavoriteIcon';
import { limitText } from '../util/textUtil';

const ProductItem = ({ product }) => {
    const { image, name, shortDescription, price, id } = product;
    return (
        <div className="card product-item">
            <div className="card-body  p-md-5 pb-md-2">
                <ShoeFavoriteIcon productId={id} productImage={image} productName={name} />
                <img src={image} className=" object-fit-contain mx-auto d-block" alt="..." width={200} height={200} />
                {/* <Link to={'/detail/1'}> */}
                <h5 className="card-title fw-light">{name}</h5>
                {/* </Link> */}
                <p className="card-text fs-2 fw-light" style={{ color: '#CbC9C9' }}>{limitText(shortDescription, 50)}</p>

            </div>
            <div className='card-footer p-0 d-flex'>
                <Link to={`/detail/${id}`} className="btn btn-buy" style={{ flex: 1 }}>Buy now</Link>
                <p className='card-price mb-0 text-center ' style={{ flex: 1 }} > {price}$</p>
            </div>
        </div>
    )
}

export default memo(ProductItem);