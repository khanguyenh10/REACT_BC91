import React from 'react'
import ProductItem from './ProductItem';

const ProductList = (props) => {
    const { dataShoe, setStateModal } = props;
    return (
        <div className='row'>
            {dataShoe.map((shoe, index) => {
                return <div className='col-md-4 mt-2' key={shoe.id}>
                    <ProductItem shoeItem={shoe} setStateModal={setStateModal} />
                </div>
            })}
        </div>
    )
}

export default ProductList