import React, { memo } from 'react'
import HeadingTitle from './HeadingTitle'
import { Link } from 'react-router-dom'
import ProductItem from './ProductItem'
import { limitText } from '../util/textUtil'

const Products = (props) => {
    const { products = [] } = props;
    return (
        <section className='products'>
            <div className="row p-md-5 g-md-5">
                {products.map(product =>
                    <div className="col-md-6 col-lg-4" key={product.id}>
                        <ProductItem imgSrc={product.image} title={product.name} shortDes={limitText(product.shortDescription, 50)} price={product.price} to={`/detail/${product.id}`} />
                    </div>
                )}
                {products.length === 0 && <div className='col-md-12 text-center'>Not found</div>}
            </div>
        </section >
    )
}

export default memo(Products)