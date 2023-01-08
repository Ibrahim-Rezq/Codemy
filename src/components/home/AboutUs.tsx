import React from 'react'

// const image = require('./imgs/about_us.webp')
import imy from './imgs/about.jpg'

const AboutUs = () => {
    return (
        <section className="py-16">
            <div className="container mx-auto py-2 flex">
                <div className="w-1/2 flex flex-col px-16 justify-center text-center ">
                    <h2 className="text-3xl font-bold mb-5">About Us</h2>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Et dolore saepe numquam nobis nesciunt
                        sed molestias inventore expedita vitae fugit quisquam dolor, itaque eius quis voluptates,
                        deserunt repudiandae repellat enim?
                    </p>
                </div>
                <div className="w-1/2 relative">
                    <img className="w-full relative z-10 " src={imy} alt="About us" />
                    <div className="bg-indigo-900 w-full h-full absolute top-6 -left-6"></div>
                </div>
            </div>
        </section>
    )
}

export default AboutUs
