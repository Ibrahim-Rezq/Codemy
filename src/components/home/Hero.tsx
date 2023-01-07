import React, { useState } from 'react'
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs'
import { RxDotFilled } from 'react-icons/rx'

const Hero = () => {
    const slides = [
        {
            url: 'https://s.udemycdn.com/browse_components/billboard/fallback_banner_image_udlite.jpg',
        },
        {
            url: 'https://img-c.udemycdn.com/notices/web_banner/slide_1_image_udlite/3577cbf1-9e6c-4ad8-8d67-bea392a59d56.png',
        },
        {
            url: 'https://img-c.udemycdn.com/notices/web_banner/slide_2_image_udlite/4f292676-2067-46c0-bfc5-9dbb50ed61df.png',
        },
        {
            url: 'https://img-c.udemycdn.com/notices/web_banner/slide_1_image_udlite/3577cbf1-9e6c-4ad8-8d67-bea392a59d56.png',
        },
    ]
    const [currentIndex, setCurrentIndex] = useState(0)
    const prevSlide = () => {
        const isFirstSlide = currentIndex === 0
        const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1
        setCurrentIndex(newIndex)
    }

    const nextSlide = () => {
        const isLastSlide = currentIndex === slides.length - 1
        const newIndex = isLastSlide ? 0 : currentIndex + 1
        setCurrentIndex(newIndex)
    }

    const goToSlide = (slideIndex: number) => {
        setCurrentIndex(slideIndex)
    }

    return (
        <div className="h-[200px] md:h-[400px] w-full py-0 px-0 relative group">
            <div
                style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
                className=" w-full h-full bg-cover bg-center duration-500  "
            ></div>
            {/**left arrow **/}
            <div className=" hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5  text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
                <BsChevronCompactLeft onClick={prevSlide} size={25} />
            </div>
            {/**right arrow **/}
            <div className=" hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
                <BsChevronCompactRight onClick={nextSlide} size={30} />
            </div>
            <div className="flex top-4 justify-center py-2 ">
                {slides.map((slide, slideIndex) => (
                    <button key={slideIndex} onClick={() => goToSlide(slideIndex)} className="text-2xl cursor-pointer ">
                        <RxDotFilled />
                    </button>
                ))}
            </div>
        </div>
    )
}

export default Hero
