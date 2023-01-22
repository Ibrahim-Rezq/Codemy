import { Container, SEOHead } from '../components'
import AboutUs from '../components/home/AboutUs'
import CoursesCarosel from '../components/home/CoursesCarosel'
import Hero from '../components/home/Hero'
import { createRandomCourse } from '../utils/fakerData'
import injectData from '../utils/injector'

// import { useDispatch, useSelector } from 'react-redux'
// import { selectUser } from '../redux/features/user/userSlice'

const Home = () => {
    // const state = useSelector(selectUser)
    // const dispatch = useDispatch()
    injectData()
    return (
        <div className="bg-white w-screen min-h-screen text-black">
            <SEOHead title="Main Page" />
            <Hero />
            <Container>
                <CoursesCarosel
                    courses={[
                        createRandomCourse(),
                        createRandomCourse(),
                        createRandomCourse(),
                        createRandomCourse(),
                        createRandomCourse(),
                    ]}
                />
                <AboutUs />
            </Container>
        </div>
    )
}

export default Home
