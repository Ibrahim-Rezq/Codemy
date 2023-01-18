import imy from '../../assets/about.jpg'

const AboutUs = () => {
    return (
        <section className="py-16">
            <div className="container w-full mx-auto py-2 flex flex-col md:flex-row">
                <div className="w-full md:w-1/2 flex flex-col px:2 md:px-16 justify-center text-center ">
                    <h2 className="text-3xl font-bold mb-5">About Us</h2>
                    <p className=" w-[96%] md:w-[90%] text-[1.2rem] my-0 mx-auto mb-[2rem]">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Et dolore saepe numquam nobis nesciunt
                        sed molestias inventore expedita vitae fugit quisquam dolor, itaque eius quis voluptates,
                        deserunt repudiandae repellat enim?
                    </p>
                </div>
                <div className=" w-[96%] mx-auto md:w-1/2 relative">
                    <img
                        className="w-[100%] md:w-[83%] md:block md:border border-[e1e2f4] md:border-[#070b5b] relative md:z-10 "
                        src={imy}
                        alt="about us"
                    />
                    <div className="hidden md:block bg-indigo-900 w-[83%] h-full absolute top-6 -left-6"></div>
                </div>
            </div>
        </section>
    )
}

export default AboutUs
