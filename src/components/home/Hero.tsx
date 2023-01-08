import React, { useRef, useState } from 'react'

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'
import './styles.css'

import { Parallax, Pagination, Navigation } from 'swiper'
import Image from '../../assets/pexels-katerina-holmes-5905706 (1).jpg'
const Hero = () => {
    return (
        <>
            <Swiper
                style={{
                    '--swiper-pagination-color': '#fff',
                }}
                speed={600}
                parallax={true}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Parallax, Pagination, Navigation]}
                className="mySwiper"
            >
                <div slot="container-start" className="parallax-bg" data-swiper-parallax="-23%">
                    <img src={Image} style={{ width: '100%', height: '100%' }} />
                </div>
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
