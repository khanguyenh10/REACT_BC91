import React from 'react'

const CardDemo = (props) => {
    const { product } = props;
    return (
        <div className='card'>
            <img src='https://i.pravatar.cc?u=1' alt='...' />
            <div className='card-body'>
                <p className='card-title'>{product?.name}</p>
                <p className='card-text'>{product?.price}</p>
                <p className='card-desc'>Lorem ipsum dolor sit amet.</p>
                <button className='btn btn-dark'>
                    <i className='fa fa-cart-plus'></i>
                    Add to cart
                </button>
            </div>
        </div>
    )
}

export default CardDemo