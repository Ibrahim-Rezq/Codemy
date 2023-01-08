import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { Container, CourseCard, SEOHead } from '../components'
import Hero from '../components/home/Hero'
import { selectUser } from '../redux/features/user/userSlice'

export default function Home() {
    const state = useSelector(selectUser)
    const dispatch = useDispatch()

    return (
        <div className="bg-white w-screen h-screen text-black">
            <Container>
                <SEOHead title="Main Page" />
                <Hero />
                <CourseCard />
            </Container>
        </div>
    )
}
