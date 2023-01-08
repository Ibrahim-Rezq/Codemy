import 'swiper/css'
import 'swiper/css/navigation'

import { Navigation, Pagination, Parallax } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'

import Image from '../../assets/pexels-katerina-holmes-5905706 (1).jpg'

const Hero = () => {
    const slides = [
        {
            title: 'Unlock the power of your people',
            text: 'Udemy Business is trusted by 12.5K+ companies around the world. Find out what we can do for yours',
        },
        {
            title: 'Learning that gets you',
            text: 'Skills for your present (and your future). Get started with us.',
        },
        {
            title: 'Learning that gets you',
            text: 'Skills for your present (and your future). Get started with us.',
        },
    ]

    return (
        <>
            <Swiper
                style={{
                    //@ts-ignore
                    '--swiper-pagination-color': '#fff',
                }}
                speed={600}
                parallax={true}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Parallax, Pagination, Navigation]}
                className="w-full h-96 mb-4"
            >
                <div
                    slot="container-start"
                    data-swiper-parallax="-23%"
                    className="absolute left-0 top-0 w-[130%] h-full "
                >
                    <img src={Image} style={{ width: '100%', height: '100%' }} alt="Hero" />
                </div>
                {slides.map((slide) => {
                    return (
                        <SwiperSlide
                            key={slide.title}
                            className="text-stone-100 w-full h-full flex justify-center items-center"
                            py-10
                            px-6
                        >
                            <div>
                                <div className="text-4xl font-[300] my-4" data-swiper-parallax="-300">
                                    {slide.title}
                                </div>
                                <div className="text-lg max-w-[25rem] leading-6" data-swiper-parallax="-100">
                                    <p> {slide.text}</p>
                                </div>
                            </div>
                        </SwiperSlide>
                    )
                })}
            </Swiper>
        </>
    )
}

export default Hero
