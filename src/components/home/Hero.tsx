import React, { useState } from 'react'
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs'
import { RxDotFilled } from 'react-icons/rx'
import HeroImage1 from '../../assets/hero1.jpg'
import HeroImage2 from '../../assets/hero2.jpg'

const Hero = () => {
    const slides = [
        {
            url: HeroImage1,
        },
        {
            url: HeroImage2,
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
        <div className="h-[200px] md:h-[670px] w-full relative group -mt-2 mb-0 pb-6">
            <div
                style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
                className=" w-full h-full bg-cover rounded-xl  bg-center duration-500"
            ></div>
            {/**left arrow **/}
            <div className=" hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5  text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
                <BsChevronCompactLeft onClick={prevSlide} size={25} />
            </div>
            {/**right arrow **/}
            <div className=" hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
                <BsChevronCompactRight onClick={nextSlide} size={30} />
            </div>
            <div className="flex absolute left-0 right-0 -bottom-2 justify-center py-2 ">
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
