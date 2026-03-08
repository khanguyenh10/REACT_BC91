import React, { useEffect } from 'react'
import ShoeCarousel from '../components/ShoeCarousel'
import Products from '../components/Products'
import HeadingTitle from '../components/HeadingTitle'
import axios from 'axios'
import { getProductApi } from '../api/productApi'

const Home = () => {
  const [products, setProducts] = React.useState([]);
  useEffect(() => {
    const getProducts = async () => {
      try {
        let response = await getProductApi();
        setProducts(response.data.content.slice(0, 18));
      } catch (error) {

      }

    }
    getProducts();
  }, [])
  console.log(products);
  return (
    <div className='home-page'>
      <div className="container">
        <ShoeCarousel />
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