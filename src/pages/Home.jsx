import React, { useEffect } from 'react'
import ShoeCarousel from '../components/ShoeCarousel'
import Products from '../components/Products'
import HeadingTitle from '../components/HeadingTitle'
import axios from 'axios'
import { getProductApi } from '../api/productApi'
import useFetchData from '../hooks/useFetchData'
import RequestHandler from '../components/RequestHandler'
import useRedux from '../hooks/useRedux'
import { renderProductsFavorite } from '../redux/reducer/userReducer'
import { getProductFavoritesApi } from '../api/userApi'

const Home = () => {
  const { data: products, isLoading, error } = useFetchData(getProductApi);
  const { data: productsFavorite, isLoading: isLoadingFavorite, error: errorFavorite } = useFetchData(getProductFavoritesApi, true);
  const { dispatch } = useRedux();
  useEffect(() => {
    if (productsFavorite) {
      dispatch(renderProductsFavorite(productsFavorite));
    }
  }, [productsFavorite])
  return (
    <div className='home-page'>
      <div className="container">
        <ShoeCarousel products={products?.splice(0, 3)} />
        <div className="row">
          <div className="col-md-6">
            <HeadingTitle title={'Product Feature'} />
          </div>
        </div>
        <RequestHandler isLoading={isLoading || isLoadingFavorite} error={error || errorFavorite}>
          <Products products={products?.splice(0, 18)} productsFavorite={productsFavorite} />
        </RequestHandler>
      </div>
    </div>
  )
}

export default Home