import React from 'react'
import HeaderHome from '../components/HeaderHome'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import Content from '../components/Content'

const HomePage = () => {
  return (
    <>
      <HeaderHome />
      <div className="row g-0 bg-danger" style={{ height: '75.6vh' }}>
        <div className="col-4">
          <Navigation />
        </div>
        <div className="col-8">
          <Content />
        </div>
      </div>
      <Footer />
    </>
  )
}

export default HomePage