import React from 'react'


// option chaining: Kiểm tra object khi có thuộc tính nếu khác null hoặc undefine thì in ra , còn nếu null hoặc undefine thì bỏ qua

const CardDemo = (props) => {
    const { product } = props;
    return (
        <div className='card'>
            <img src={product?.img} alt='...' />
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