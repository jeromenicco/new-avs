import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";

import newsData from '../newsData'

import './News.css'

import "swiper/css";
import "swiper/css/navigation"


import SwiperCore, { Navigation } from "swiper"


function News({ isLaptop }) {
    SwiperCore.use([Navigation]);
    return (
        <div className='news-container' id='news-section'>
            <div className='news-content'>
                <div className='component-content'>
                    <p className='paragraph-title news-title'>News</p>
                    <p className='paragraph-text'>Our news space is uploaded frequently!</p>
                </div>
                <div className='carousel-wrapper'>
                    <Swiper
                        className="swiper-container"
                        slidesPerView={isLaptop ? 3 : 1.2}
                        spaceBetween={isLaptop ? 30 : 15}
                        navigation={isLaptop ? true : false}
                        speed={700}
                    >
                        {
                            newsData.map(item => (
                                <SwiperSlide>
                                    {
                                        item.withImage === true ?
                                            <div className='card-container'>
                                                <div>
                                                    <img src={item.image} alt='coffee-break' />
                                                    <div className='news-inner-container'>
                                                        <div>
                                                            <h3 className='news-card-title'>{item.location}</h3>
                                                            {/* <GoLocation /> */}
                                                        </div>
                                                        <div>
                                                            <h4>{item.date}</h4>
                                                            {/* <FiClock /> */}
                                                        </div>
                                                    </div>
                                                    <div className='content-container'>
                                                        <p>{item.content}</p>
                                                    </div>
                                                </div>
                                            </div>
                                            :
                                            <div className='card-container'>
                                                <div>
                                                    <div className='news-inner-container2'>
                                                        <h3 className='news-card-title'>{item.title}</h3>
                                                        <p>{item.content}</p>
                                                        <h4>{item.date}</h4>
                                                    </div>
                                                </div>
                                            </div>
                                    }
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
