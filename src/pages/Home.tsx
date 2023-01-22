import { useDispatch, useSelector } from 'react-redux'

import { Container, CourseCard, PageTitle, SEOHead } from '../components'
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
                                <CourseCard
                                    course={{
                                        id: '',
                                        title: '',
                                        description: '',
                                        imageURL: '',
                                        slug: '',
                                        requirements: [],
                                        starsRating: 0,
                                        rating: 0,
                                        lecturesCount: 0,
                                        lectures: [],
                                        reviews: [],
                                        whatYouWellLearn: [],
                                        time: 0,
                                        progress: 0,
                                        students: 0,
                                        instructor: '',
                                        instructorId: '',
                                        created_at: '',
                                        updated_at: '',
                                        price: 0,
                                        onSale: false,
                                        isDiscounted: false,
                                        discount: 0,
                                        isBestSeller: false,
                                    }}
                                />
                            </>
                        )
                    })}
                </div>
                <PageTitle title={'Deveolpment'} />
                <div className="grid grid-cols-5 gap-2 my-10">
                    {[...Array(5)].map(() => {
                        return (
                            <>
                                <CourseCard
                                    course={{
                                        id: '',
                                        title: '',
                                        description: '',
                                        imageURL: '',
                                        slug: '',
                                        requirements: [],
                                        starsRating: 0,
                                        rating: 0,
                                        lecturesCount: 0,
                                        lectures: [],
                                        reviews: [],
                                        whatYouWellLearn: [],
                                        time: 0,
                                        progress: 0,
                                        students: 0,
                                        instructor: '',
                                        instructorId: '',
                                        created_at: '',
                                        updated_at: '',
                                        price: 0,
                                        onSale: false,
                                        isDiscounted: false,
                                        discount: 0,
                                        isBestSeller: false,
                                    }}
                                />
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
