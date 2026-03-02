import React from 'react'
import ShoeCarousel from '../components/ShoeCarousel'
import Products from '../components/Products'
import HeadingTitle from '../components/HeadingTitle'

const Home = () => {
  return (
    <div className='home-page'>
      <div className="container">
        <ShoeCarousel />
        <div className="row">
          <div className="col-md-6">
            <HeadingTitle title={'Product Feature'} />
          </div>
        </div>
        <Products />
      </div>
    </div>
  )
}

export default Home