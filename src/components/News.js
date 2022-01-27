import React from 'react'
import newsData from '../newsData'
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation } from "swiper"

import './News.css'

import "swiper/css";
import "swiper/css/navigation"
import { is } from '@react-spring/shared';


function News({ isMobile, isTablet, isLaptop }) {
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
                        slidesPerView={isLaptop ? 3 : 1.3}
                        spaceBetween={isLaptop ? 30 : 20}
                        navigation={isLaptop ? true : false}
                        speed={700}
                    >
                        {
                            newsData.map((item, index) => (
                                <SwiperSlide key={index}>
                                    {
                                        item.withImage === true ?
                                            <div className='card-container'>
                                                <img src={item.image} alt='coffee-break' />
                                                <div className='news-inner-container'>
                                                    <div>
                                                        <h3 className='news-card-title'>{item.location}</h3>
                                                        <p>{item.content}</p>
                                                        <h4>{item.date}</h4>
                                                    </div>
                                                </div>
                                            </div>
                                            :
                                            <div className='card-container'>
                                                <div className='news-inner-container'>
                                                    <div>
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
