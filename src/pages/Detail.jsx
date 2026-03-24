import React, { use, useEffect, useState } from 'react'
import Products from '../components/Products'
import { toastSuccess } from '../util/toast';
import useRedux from '../hooks/useRedux';
import { addToCart } from '../redux/reducer/cartReducer';
import { getProductDetailActionThunk } from '@/redux/reducer/productReducer';
import useRouting from '@/hooks/useRouting';
import { getProductFavoritesActionThunk } from '@/redux/reducer/userReducer';

const Detail = () => {
    const { useAppSelector, dispatch } = useRedux();
    const { productDetail } = useAppSelector(state => state.productReducer);
    const { params, navigate } = useRouting();
    const [number, setNumber] = useState(1);
    console.log(params);
    useEffect(() => {
        dispatch(getProductDetailActionThunk(params.id));
        window.scrollTo(0, 0)
    }, [params])

    // lay arrProduct yêu thích của user để hiển thị ở trang chủ chỉ gọi khi có accessToken
    useEffect(() => {
        dispatch(getProductFavoritesActionThunk());
    }, [])
    const handleAddToCart = () => {
        const action = addToCart({ id: productDetail?.id, name: productDetail?.name, price: productDetail?.price, image: productDetail?.image, quantity: number });
        dispatch(action);
        toastSuccess('Thêm vào giỏ hàng thành công');
        navigate('/carts');
    }

    return (
        <div className='detail-page'>
            <div className="container">
                <div className="row my-3 my-md-5 g-md-5">
                    <div className="col-md-4">
                        <div className='bg-secondary p-4 d-flex align-content-center' style={{ width: 334, height: 335 }}>
                            <img src={productDetail?.image} className=' object-fit-contain' />
                        </div>
                    </div>
                    <div className="col-md-6">
                        <h2 className=' fs-3 fw-light'>{productDetail?.name}</h2>
                        <p>{productDetail?.description}</p>
                        <div className='size'>
                            <h3 className='text-success' style={{ fontSize: '2.4rem' }}>Available size
                            </h3>
                            <ul className='d-flex gap-3 flex-wrap mt-4'>
                                {productDetail?.size?.map((item, index) => {
                                    return (
                                        <li key={index}>
                                            <a href="#" className='p-3 bg-secondary fw-semibold'>{item}</a>
                                        </li>
                                    )
                                })}
                            </ul>
                        </div>
                        <p className='price fs-3 fw-semibold text-danger mt-4'>{productDetail?.price} $</p>
                        <div className='quantity'>
                            <button className='btn btn-increase' onClick={() => setNumber(number + 1)}>+</button>
                            <input type='number' min={1} readOnly value={number} />
                            <button className='btn btn-increase' onClick={() => setNumber(Math.max(1, number - 1))}>-</button>
                        </div>
                        <button className='btn btn-add-to-cart my-2' style={{ fontSize: '2.4rem' }} onClick={handleAddToCart}>Add to cart</button>
                    </div>
                </div>
                <h2 className='fs-4 text-center'>-Realate Product -</h2>
                <Products products={productDetail?.relatedProducts} />
            </div>
        </div>
    )
}

export default Detail