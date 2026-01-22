import React from 'react'
import Header from '../components/HeroicFeatures/Header'
import Banner from '../components/HeroicFeatures/Banner'
import Content from '../components/HeroicFeatures/Content'
import Footer from '../components/HeroicFeatures/Footer'


const BaiTapThucHanhLayout = () => {
  return (
    <>
      <Header />
      <main>
        <Banner />
        <Content />
      </main>
      <Footer />
    </>
  )
}

export default BaiTapThucHanhLayout