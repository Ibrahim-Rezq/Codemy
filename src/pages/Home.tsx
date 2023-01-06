import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { Container, CourseCard, SEOHead } from '../components'
import { selectUser } from '../redux/features/user/userSlice'
import Hero from '../components/home/Hero'

export default function Home() {
    const state = useSelector(selectUser)
    const dispatch = useDispatch()

    return (
        <div className="bg-white w-screen h-screen text-black">
            <Container>
                <SEOHead title="Main" />
                <Hero />
                <CourseCard />
            </Container>
        </div>
    )
}
