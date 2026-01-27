import React from 'react'


const ItemCar = (props) => {
    const { carItem, setStateModal } = props;
    return (
        <div className='card'>
            <img src={carItem.img} alt='...' />
            <div className='card-body'>
                <h3 className='card-title'>{carItem.name}</h3>
                <p className='card-text'>{carItem.price}</p>
                <button data-bs-toggle="modal" data-bs-target="#modalId" className='btn btn-dark' onClick={(e) => {
                    setStateModal(carItem)
                }}>Detail</button>
            </div>
        </div>
    )
}

export default ItemCar