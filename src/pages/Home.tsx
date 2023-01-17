import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { Container, CourseCard, PageTitle, SEOHead } from '../components'
import AboutUs from '../components/home/AboutUs'
import Hero from '../components/home/Hero'
import { filterCourses } from '../redux/features/coursesFilters/filteredCoursesSlice'
import { selectUser } from '../redux/features/user/userSlice'
import { RootState } from '../redux/store'
import { Course } from '../utils/tempData'

const Home = () => {
    const state = useSelector(selectUser)
    const dispatch = useDispatch()
    // const courseState = useSelector(courses)
    // const filterState = useSelector(currentFilter)
    // const filteredCoursesState = useSelector(filteredCourses)
    // const courseState = useSelector((state: RootState) => state.course.courses)
    const filterState = useSelector((state: RootState) => state.course.filters)
    const filteredCoursesState = useSelector((state: RootState) => state.course.filteredCourses)
    const dummyCourse:Course[]=[{
        id: '1',
        name: 'react mastery',
        description:
            "a course to master react from the begining to the end using moderen techeing and more just some more words to make this description seem longer than it seems and to add more data for usage and don't know what to wright next",
        slug: 'react-mastery',
        requirements: ['English Language', 'javascript  Knowlage'],
        ratingStars: 4.5,
        rating: 1902,
        lecturesCount: 10,
        lectures: [
            { id: '1', courseId: '1', name: 'Course Structure and projectes', time: 335 },
            { id: '2', courseId: '1', name: 'Setting up our code editor', time: 560 },
            { id: '3', courseId: '1', name: 'Your Very First Webpage!', time: 900 },
        ],
        reviews: [{ id: '1' }],
        whatYouWellLearn: [
            { id: '1', text: 'Create a React js project from scratch' },
            { id: '2', text: 'Use Firebase auth for complete authentication' },
            { id: '3', text: 'Work with latest versions like React js 18, Firebase 9 and Tailwind CSS 3' },
            { id: '4', text: 'Add forgot password functionality using Firebase auth' },
            {
                id: '5',
                text: 'Learn how to sign up/in the users using username/password and Google oAuth using Firebase auth',
            },
            { id: '6', text: 'Use Firebase Firestore to store and fetch data' },
            { id: '7', text: 'Use Firebase auth for complete authentication' },
        ],
        time: 6050, //in minutes
        progress: 16, // in percent
        students: 5900,
        instructor: 'mohamed',
        instructorId: '1',
        created_at: '10-10-2020',
        updated_at: '15-12-2020',
        price: 10, // cents 349.99$
        onSale: true,
        discount: 50, // in percent  34999 * 50%,
        language:'english',
        subtitle:['','arabic'],
        bestseller: false,
        topic:['react'],
        level:'beginner',
        features:['subtitle'],

    }]
    const dummyFilter={
        rating: 0,
        language: ['english'],
        videoDuration: [{min:1,max:101}],
        features: ['subtitle'],
        topic: ['react'],
        level: ['all'],
        subtitle: ['arabic'],
        price: ['free','paid'],
    }
    useEffect(() => {
        dispatch(filterCourses(dummyCourse,dummyFilter)) 
    }, [])
    
    console.log(filteredCoursesState)


    return (
        // <div className="bg-white w-screen min-h-screen text-black">
        //     <SEOHead title="Main Page" />
        //     <Hero />
        //     <Container>
        //         <PageTitle title={'It & Software'} />
        //         <div className="grid grid-cols-5 gap-2 my-10">
        //             {[...Array(5)].map(() => {
        //                 return (
        //                     <>
        //                         <CourseCard />
        //                     </>
        //                 )
        //             })}
        //         </div>
        //         <PageTitle title={'Deveolpment'} />
        //         <div className="grid grid-cols-5 gap-2 my-10">
        //             {[...Array(5)].map(() => {
        //                 return (
        //                     <>
        //                         <CourseCard />
        //                     </>
        //                 )
        //             })}
        //         </div>
        //         <AboutUs />
        //     </Container>
        // </div>
        <></>
    )
}

export default Home
