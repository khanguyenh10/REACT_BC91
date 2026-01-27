import React from 'react'

const ProductItem = (props) => {
    const { product } = props;
    return (
        <div className='card '>
            <img src={product?.image} alt='...' className='d-block w-50 mx-auto' />
            <div className='card-body'>
                <p className='card-title'>{product?.name}</p>
                <p className='card-text'>{product?.price}$</p>
                <button className='btn btn-dark'>
                    Add to cart
                    <i className='fa fa-cart-plus'></i>
                </button>
            </div>
        </div>
    )
}

export default ProductItem