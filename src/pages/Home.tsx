// main page seen on website open -> path : /

import React from 'react'
// import udemyLogo from '../assets/udemy.svg';
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

import { Container, CourseCard, SEOHead } from '../components'
import { selectUser } from '../redux/features/user/userSlice'
export default function Home() {
    const state = useSelector(selectUser)
    const dispatch = useDispatch()

    return (
        <div className="bg-white w-screen h-screen text-black">
            <Container>
                <SEOHead title="Main" />
                <CourseCard />
            </Container>
        </div>
    )
}
