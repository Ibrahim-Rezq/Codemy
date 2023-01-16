import { useDispatch, useSelector } from 'react-redux'

import { Container, SEOHead } from '../components'
import AboutUs from '../components/home/AboutUs'
import CoursesCarosel from '../components/home/CoursesCarosel'
import Hero from '../components/home/Hero'
import { selectUser } from '../redux/features/user/userSlice'
import { course } from '../utils/tempData'

const Home = () => {
    const state = useSelector(selectUser)
    const dispatch = useDispatch()

    return (
        <div className="bg-white w-screen min-h-screen text-black">
            <SEOHead title="Main Page" />
            <Hero />
            <Container>
                <CoursesCarosel courses={[course, course, course, course, course]} />
                <AboutUs />
            </Container>
        </div>
    )
}

export default Home
