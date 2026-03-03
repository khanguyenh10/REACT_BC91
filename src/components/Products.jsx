import React from 'react'
import HeadingTitle from './HeadingTitle'
import { Link } from 'react-router-dom'
import ProductItem from './ProductItem'

const Products = () => {
    return (
        <section className='products'>
            <div className="row p-md-5 g-md-5">
                <div className="col-md-6 col-lg-4">
                    <ProductItem imgSrc='/shoes/thumbnail.png' title={'Adidas Prophere'} shortDes={'short descript'} price={'85$'} to={'/detail/1'} />
                </div>
                <div className="col-md-6 col-lg-4">
                    <ProductItem imgSrc='/shoes/thumbnail.png' title={'Adidas Prophere'} shortDes={'short descript'} price={'85$'} to={'/detail/2'} />
                </div>
                <div className="col-md-6 col-lg-4">
                    <ProductItem imgSrc='/shoes/thumbnail.png' title={'Adidas Prophere'} shortDes={'short descript'} price={'85$'} to={'/detail/3'} />
                </div>
            </div>
        </section >
    )
}

export default Products