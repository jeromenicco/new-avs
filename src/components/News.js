import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";

import newsData from '../newsData'

import './News.css'

import "swiper/css";
import "swiper/css/navigation"


import SwiperCore, { Navigation } from "swiper"


function News() {
    SwiperCore.use([Navigation]);
    return (
        <div className='news-container' id='news-section'>
            <div className='news-content'>
                <p className='paragraph-title'>News</p>
                <div className='carousel-wrapper'>
                <Swiper
                    className="swiper-container"
                    slidesPerView={3}
                    spaceBetween={30}
                    navigation={true}
                    speed={700}
                >
                    {
                        newsData.map(item => (
                            <SwiperSlide>
                                <div className='card-container'>
                                    <div>
                                        <img src={item.image} alt='coffee-break' />
                                        <div className='news-inner-container'>
                                            <div>
                                                <h3>{item.location}</h3>
                                                {/* <GoLocation /> */}
                                            </div>
                                            <div>
                                                <h3>{item.date}</h3>
                                                {/* <FiClock /> */}
                                            </div>
                                        </div>
                                        <p>{item.comment}</p>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))
                    }
                </Swiper>
                </div>
            </div>
        </div>
    )
}

export default News
