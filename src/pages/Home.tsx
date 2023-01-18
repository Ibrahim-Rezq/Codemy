import { useDispatch, useSelector } from 'react-redux'

<<<<<<< HEAD
import { Container, SEOHead } from '../components'
=======
import { Container, CourseCard, PageTitle, SEOHead } from '../components'
>>>>>>> 9b2fa9bb699a6542e7f7ee8349866a287473a91e
import AboutUs from '../components/home/AboutUs'
import CoursesCarosel from '../components/home/CoursesCarosel'
import Hero from '../components/home/Hero'
import { selectUser } from '../redux/features/user/userSlice'
import { createRandomCourse } from '../utils/fakerData'
const Home = () => {
    const state = useSelector(selectUser)
    const dispatch = useDispatch()

    return (
        <div className="bg-white w-screen min-h-screen text-black">
            <SEOHead title="Main Page" />
            <Hero />
            <Container>
                <PageTitle title={'It & Software'} />
                <div className="grid grid-cols-5 gap-2 my-10">
                    {[...Array(5)].map(() => {
                        return (
                            <>
                                <CourseCard />
                            </>
                        )
                    })}
                </div>
                <PageTitle title={'Deveolpment'} />
                <div className="grid grid-cols-5 gap-2 my-10">
                    {[...Array(5)].map(() => {
                        return (
                            <>
                                <CourseCard />
                            </>
                        )
                    })}
                </div>
                <AboutUs />
            </Container>
        </div>
    )
}

export default Home
