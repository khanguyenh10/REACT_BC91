import React from 'react'
import ChildComponent from './ChildComponent'
import CardDemo from './CardDemo'
import CarDemo from '../StateDemo/CarDemo'
import ChildrenProp from './ChildrenProp'


/*
    Props là properties (các thuộc tính của thẻ) do ta tự định nghĩa
    + Đối với thẻ bình thường input (id,value, className,style,...)
    + Đối với thẻ <Component propName="value" />
    + Props là giá trị không được gán lại (const hằng số)
*/

const PropsDemo = () => {

    const arrProduct = [
        { id: 1, name: 'Iphone', price: 1000, img: `https://dummyimage.com/600x400/000/fff?text=iphone` },
        { id: 2, name: 'Xiaomi', price: 2000, img: `https://dummyimage.com/600x400/000/fff?text=xiaomi` },
        { id: 3, name: 'Samsung phone', price: 3000, img: `https://dummyimage.com/600x400/000/fff?text=Samsung` },
    ]

    return (
        <div className='container'>
            <h3>PropsDemo</h3>
            <input className='form-control w-25' defaultValue={1} />

            <ChildComponent title="Cybersoft" view={50} />
            <ChildComponent title="FE" view={100} />
            <ChildComponent title="BE" view={200} />
            <ChildComponent title="Fullstack" view={300} />
            <hr />
            <h3>Product list</h3>
            <div className='row'>
                <div className='col-4'>
                    <CardDemo product={arrProduct[0]} />
                </div>
                <div className='col-4'>
                    <CardDemo product={arrProduct[1]} />
                </div>
                <div className='col-4'>
                    <CardDemo product={arrProduct[2]} />
                </div>
            </div>
            <hr />
            <h1>Children props</h1>
            <ChildrenProp jsxElement={<p>Lorem ipsum dolor sit amet.</p>}>
                <h1>children 123</h1>
                <CarDemo />
            </ChildrenProp>
        </div>
    )
}

export default PropsDemo