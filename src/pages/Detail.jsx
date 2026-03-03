import React, { use, useEffect } from 'react'
import Products from '../components/Products'
import { useParams } from 'react-router-dom';

const Detail = () => {
    const params = useParams();
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [params])
    return (
        <div className='detail-page'>
            <div className="container">
                <div className="row my-3 my-md-5 g-md-5">
                    <div className="col-md-4">
                        <div className='bg-secondary p-4 d-flex align-content-center' style={{ width: 334, height: 335 }}>
                            <img src='/shoes/thumbnail.png' className=' object-fit-contain' />
                        </div>
                    </div>
                    <div className="col-md-6">
                        <h2 className=' fs-3 fw-light'>Product name</h2>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores pariatur sequi esse ducimus veritatis aspernatur totam inventore, tempore rem impedit illum qui a quae aperiam officiis, error repellat sunt nulla! ( Thuộc tính Description)</p>
                        <div className='size'>
                            <h3 className='text-success' style={{ fontSize: '2.4rem' }}>Available size
                            </h3>
                            <ul className='d-flex gap-3 flex-wrap mt-4'>
                                <li>
                                    <a href="#" className='p-3 bg-secondary fw-semibold'>38</a>
                                </li>
                                <li>
                                    <a href="#" className='p-3 bg-secondary fw-semibold'>39</a>
                                </li>
                                <li>
                                    <a href="#" className='p-3 bg-secondary fw-semibold'>40</a>
                                </li>
                                <li>
                                    <a href="#" className='p-3 bg-secondary fw-semibold'>41</a>
                                </li>
                                <li>
                                    <a href="#" className='p-3 bg-secondary fw-semibold'>42</a>
                                </li>
                            </ul>
                        </div>
                        <p className='price fs-3 fw-semibold text-danger mt-4'>85$</p>
                        <div className='quantity'>
                            <button className='btn btn-increase'>+</button>
                            <input type='number' min={1} readOnly value={1} />
                            <button className='btn btn-increase'>-</button>
                        </div>
                        <button className='btn btn-add-to-cart my-2' style={{ fontSize: '2.4rem' }}>Add to cart</button>
                    </div>
                </div>
                <h2 className='fs-4 text-center'>-Realate Product -</h2>
                <Products />
            </div>
        </div>
    )
}

export default Detail