// main page seen on website open -> path : /

import React from 'react'
// import udemyLogo from '../assets/udemy.svg';
import { useDispatch, useSelector } from 'react-redux'

import { CourseCard, SEOHead } from '../components'
import { selectUser } from '../redux/features/user/userSlice'
export default function Home() {
    const state = useSelector(selectUser)
    const dispatch = useDispatch()

    return (
        <div className="flex bg-white justify-center items-center min-h-screen text-center">
            <SEOHead title="Main" />
            <CourseCard />
        </div>
    )
}
