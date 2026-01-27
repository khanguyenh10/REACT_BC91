import React from 'react'


const ProductItem = (props) => {
    const { shoeItem, setStateModal } = props;
    return (
        <div className='card'>
            <img src={shoeItem.image} alt='...' width={200} className='mx-auto d-block' />
            <div className='card-body'>
                <h3 className='card-title'>{shoeItem.name}</h3>
                <p className='card-text'>{shoeItem.price} $</p>
                <button data-bs-toggle="modal" data-bs-target="#modalId" className='btn btn-dark' onClick={(e) => {
                    setStateModal(shoeItem)
                }}>Add to cart  <i class="fa fa-shopping-cart"></i></button>
            </div>
        </div>
    )
}

export default ProductItem