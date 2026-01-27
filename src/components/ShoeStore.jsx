import React, { useState } from 'react'
import dataShoe from '../dataShoe.json';
import ModalShoe from './ModalShoe';
import ProductList from './ProductList';


// nên đặt state vào UI cao nhất chứa giao diện và nút xử lý
const ShoeStore = () => {
    const [stateModal, setStateModal] = useState(
        dataShoe[0]
    )
    return (
        <div className='container'>
            <h3 className='text-center'>Shoe Shop</h3>
            <ModalShoe stateModal={stateModal} />
            <ProductList dataShoe={dataShoe} setStateModal={setStateModal} />
        </div>
    )
}

export default ShoeStore