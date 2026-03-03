import React from 'react'
import { Link } from 'react-router-dom';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';


const ShoeCarousel = () => {
    return (
        <section className='shoe-carousel'>
            <Swiper
                modules={[Navigation, Pagination, Autoplay]}
                spaceBetween={50} //Khoảng cách giữa các slide là $number px
                slidesPerView={1} //$number slide cùng lúc trên màn hình.
                navigation
                pagination={{ clickable: true }}
                autoplay={{
                    delay: 2000,
                    disableOnInteraction: false,
                }}
                loop={true}
            // {/* onSlideChange={() => console.log('slide change')} */}
            // {/* onSwiper={(swiper) => console.log(swiper)} */}
            >
                <SwiperSlide>
                    <div className='row  align-items-center '>
                        <div className="col-md-6 col-lg-8 text-center">
                            <img src='./shoes/thumbnail.png' />
                        </div>
                        <div className="col-md-6 col-lg-4 ">
                            {/* <Link to="/detail/1"> */}
                            <h2 className='fw-light fs-4'>Product name</h2>
                            {/* </Link> */}
                            <p className='fw-light fs-2'>Product description</p>
                            <Link to="/detail/1" className='btn btn-warning fs-2 fw-light text-white rounded-0 px-5 py-3 mt-2'>Buy now</Link>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='row  align-items-center '>
                        <div className="col-md-8 text-center">
                            <img src='./shoes/thumbnail.png' />
                        </div>
                        <div className="col-md-4">
                            {/* <Link to="/detail/1"> */}
                            <h2 className='fw-light fs-4'>Product name</h2>
                            {/* </Link> */}
                            <p className='fw-light fs-2'>Product description</p>
                            <Link to="/detail/1" className='btn btn-warning fs-2 fw-light text-white rounded-0 px-5 py-3 mt-2'>Buy now</Link>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>

        </section>
    )
}

export default ShoeCarousel