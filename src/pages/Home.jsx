import React, { use, useEffect } from 'react'
import ShoeCarousel from '@/components/ShoeCarousel'
import Products from '../components/Products'
import HeadingTitle from '../components/HeadingTitle'
import useRedux from '../hooks/useRedux'
import { getProductFavoritesActionThunk } from '../redux/reducer/userReducer'
import { getAllProductActionThunk } from '@/redux/reducer/productReducer'

const Home = () => {
  const { dispatch, useAppSelector } = useRedux();
  const { arrProduct: products } = useAppSelector(state => state.productReducer);
  // lấy arrProduct từ api về để hiển thị ở trang chủ
  useEffect(() => {
    dispatch(getAllProductActionThunk());
  }, [])
  // lay arrProduct yêu thích của user để hiển thị ở trang chủ chỉ gọi khi có accessToken
  useEffect(() => {
    dispatch(getProductFavoritesActionThunk());
  }, [])
  return (
    <div className='home-page'>
      <div className="container">
        <ShoeCarousel products={[...products].slice(0, 3)} />
        <div className="row">
          <div className="col-md-6">
            <HeadingTitle title={'Product Feature'} />
          </div>
        </div>
        <Products products={products} />
      </div>
    </div>
  )
}

export default Home