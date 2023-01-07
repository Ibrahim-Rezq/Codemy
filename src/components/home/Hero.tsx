import React, { useState } from 'react'
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs'
import { RxDotFilled } from 'react-icons/rx'

const Hero = () => {
    const slides = [
        {
            url: 'https://img-c.udemycdn.com/notices/web_banner/slide_2_image_udlite/4f292676-2067-46c0-bfc5-9dbb50ed61df.png',
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

    const goToSlide = (slideIndex) => {
        setCurrentIndex(slideIndex)
    }

    return (
        <div className=" w-[100%] h-[25rem] sm:h-[28rem] md:h-[35rem]   md:max-w-[1400px] md:h-[780px] w-full m-auto py-16 px-4 relative group">
            <div
                style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
                className=" w-full h-full rounded-2xl bg-center bg-cover bg-center duration-500  "
            ></div>
            {/* <div className="bg-white w-full px:1rem  md:absolute top-[43%] md:py-[1rem] md:px-[2rem] md:w-[27rem] ml-[1rem]">
                <h1>New year, new career moves</h1>
                <p className="w-{90%}">
                    Discover what employers are looking for in 2023 and how to level up with our skills guide — yours
                    free when you buy a course.
                </p>
            </div> */}
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
                    <div key={slideIndex} onClick={() => goToSlide(slideIndex)} className="text-2xl cursor-pointer ">
                        <RxDotFilled />
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Hero
