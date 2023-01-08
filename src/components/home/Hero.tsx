import React, { useRef, useState } from 'react'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

import './styles.css'
// import required modules
import { Parallax, Pagination, Navigation } from 'swiper'

import HeroImage1 from '../../assets/hero1.jpg'
import HeroImage2 from '../../assets/hero2.jpg'

const Hero = () => {
    // const slides = [
    //     {
    //         url: 'https://img-c.udemycdn.com/notices/web_banner/slide_1_image_udlite/bf1bd00b-e65c-4d18-8b3a-0176cfbb3601.jpg',
    //     },
    //     {
    //         url: '	https://img-c.udemycdn.com/notices/web_banner/slid…e_udlite/e6cc1a30-2dec-4dc5-b0f2-c5b656909d5b.jpg',
    //     },
    //     {
    //         url: 'https://img-c.udemycdn.com/notices/web_banner/slide_2_image_udlite/4f292676-2067-46c0-bfc5-9dbb50ed61df.png',
    //     },
    //     {
    //         url: 'https://img-c.udemycdn.com/notices/web_banner/slide_1_image_udlite/3577cbf1-9e6c-4ad8-8d67-bea392a59d56.png',
    //     },
    // ]

    return (
        <>
            <Swiper
                // style={{
                //     '--swiper-navigation-color': '#fff',
                //     '--swiper-pagination-color': '#fff',
                // }}
                speed={600}
                parallax={true}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Parallax, Pagination, Navigation]}
                className="mySwiper"
            >
                <div
                    slot="container-start"
                    className="parallax-bg"
                    style={{
                        backgroundImage:
                            'url(https://img-c.udemycdn.com/notices/web_banner/slide_1_image_udlite/bf1bd00b-e65c-4d18-8b3a-0176cfbb3601.jpg)',
                    }}
                    data-swiper-parallax="-23%"
                ></div>
                <SwiperSlide>
                    <div className="title" data-swiper-parallax="-300">
                        Unlock the power of your people
                    </div>

                    <div className="text" data-swiper-parallax="-100">
                        <p>
                            Udemy Business is trusted by 12.5K+ companies around the world. Find out what we can do for
                            yours.
                        </p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="title" data-swiper-parallax="-300">
                        Learning that gets you
                    </div>

                    <div className="text" data-swiper-parallax="-100">
                        <p>Skills for your present (and your future). Get started with us.</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="title" data-swiper-parallax="-300">
                        Learning that gets you
                    </div>

                    <div className="text" data-swiper-parallax="-100">
                        <p>
                            Udemy Business is trusted by 12.5K+ companies around the world. Find out what we can do for
                            yours.
                        </p>
                    </div>
                </SwiperSlide>
            </Swiper>
        </>
    )
}

export default Hero
