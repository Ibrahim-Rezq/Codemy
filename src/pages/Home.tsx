import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

<<<<<<< HEAD
import { Container, CourseCard, SEOHead } from '../components'
=======
import { Container, CourseCard, PageTitle, SEOHead } from '../components'
>>>>>>> e8bd4b907479452e05dc036b357fecf7d540cca6
import AboutUs from '../components/home/AboutUs'
import Hero from '../components/home/Hero'
import { selectUser } from '../redux/features/user/userSlice'

const Home = () => {
    const state = useSelector(selectUser)
    const dispatch = useDispatch()

    return (
        <div className="bg-white w-screen min-h-screen text-black">
            <SEOHead title="Main Page" />
            <Hero />
            <Container>
<<<<<<< HEAD
                <SEOHead title="Main Page" />
                <Hero />
                <CourseCard />
=======
                <PageTitle title={'It & Software'} />
                <div className="grid grid-cols-5 gap-2 my-10">
                    {[...Array(5)].map(() => {
                        return (
                            <>
                                <CourseCard wide={false} />
                            </>
                        )
                    })}
                </div>
                <PageTitle title={'Deveolpment'} />
                <div className="grid grid-cols-5 gap-2 my-10">
                    {[...Array(5)].map(() => {
                        return (
                            <>
                                <CourseCard wide={false} />
                            </>
                        )
                    })}
                </div>
>>>>>>> e8bd4b907479452e05dc036b357fecf7d540cca6
                <AboutUs />
            </Container>
        </div>
    )
}

export default Home
