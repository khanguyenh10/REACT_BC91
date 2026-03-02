import React from 'react'
import { Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';


const ShoeCarousel = () => {
    return (
        <section className='shoe-carousel'>
            <Swiper
                modules={[Navigation, Pagination,]}
                spaceBetween={50} //Khoảng cách giữa các slide là $number px
                slidesPerView={1} //$number slide cùng lúc trên màn hình.
                navigation
                pagination={{ clickable: true }}
            // {/* onSlideChange={() => console.log('slide change')} */}
            // {/* onSwiper={(swiper) => console.log(swiper)} */}
            >
                <SwiperSlide>
                    <div className='row  align-items-center '>
                        <div className="col-md-6 col-lg-8 text-center">
                            <img src='./shoes/thumbnail.png' />
                        </div>
                        <div className="col-md-6 col-lg-4 ">
                            <h2 className='fw-light fs-4'>Product name</h2>
                            <p className='fw-light fs-2'>Product description</p>
                            <button className='btn btn-warning fs-2 fw-light text-white rounded-0 px-5 py-3 mt-2'>Buy now</button>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='row  align-items-center '>
                        <div className="col-md-8 text-center">
                            <img src='./shoes/thumbnail.png' />
                        </div>
                        <div className="col-md-4">
                            <h2 className='fw-light fs-4'>Product name</h2>
                            <p className='fw-light fs-2'>Product description</p>
                            <button className='btn btn-warning fs-2 fw-light text-white rounded-0 px-5 py-3 mt-2'>Buy now</button>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>

        </section>
    )
}

export default ShoeCarousel