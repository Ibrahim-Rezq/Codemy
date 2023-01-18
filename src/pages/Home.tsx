import { useDispatch, useSelector } from 'react-redux'

import { Container, CourseCard, PageTitle, SEOHead } from '../components'
import AboutUs from '../components/home/AboutUs'
import Hero from '../components/home/Hero'
import {  coursesState, filteredCoursesState, filterState } from '../redux/features/course/courseSlice'
import { selectUser } from '../redux/features/user/userSlice'

const Home = () => {
    const state = useSelector(selectUser)
    const dispatch = useDispatch()
    const filter = useSelector(filterState)
    const course = useSelector(coursesState)
    const filteredCourse = useSelector(filteredCoursesState)
    console.log(filter)
    console.log(course)
    console.log(filteredCourse)
    console.log(filterState)
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
