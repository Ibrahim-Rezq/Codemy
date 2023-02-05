import { Elements } from '@stripe/react-stripe-js'
import { loadStripe } from '@stripe/stripe-js'
import { Outlet } from 'react-router-dom'

import { ForgotPassword, Navigation, SignIn, SignUp } from '../components'
import { Cart, Checkout, Course, Home, Join, User } from '../pages'
import CourseLearn from '../pages/CourseLearn'

const promise = loadStripe(
    'pk_test_51LHoCuCajsSYQyt62Mk7QQpfFB02M0WlxvV2ChvnuLC53AdryXEeCz6IMnrOULpEZxywKLwccWcqNF4EF5Bzgjob00gMQhTwWR',
)

export const routes = [
    {
        path: '/',
        element: <NavbarWrapper />,
        children: [
            {
                path: '',
                element: <Home />,
            },

            {
                path: '/join',
                element: <Join />,
                children: [
                    {
                        path: 'signup-popup',
                        element: <SignUp />,
                    },
                    {
                        path: 'login-popup',
                        element: <SignIn />,
                    },
                ],
            },
            {
                path: '/user',
                element: <User />,
                children: [
                    {
                        path: 'forgot-password',
                        element: <ForgotPassword />,
                    },
                    {
                        path: 'edit',
                        element: <Home />,
                    },
                ],
            },
            {
                path: '/my-learning',
                element: <Home />,
            },
            {
                path: '/course/:slug',
                element: <Course />,
            },
            {
                path:'/learn/course/:id',
                element: <CourseLearn/>,
            },
            {
                path: '/cart',
                children: [
                    {
                        path: '',
                        element: <Cart />,
                    },
                    {
                        path: 'checkout',
                        element: (
                            <Elements stripe={promise}>
                                <Checkout />
                            </Elements>
                        ),
                    },
                ],
            },
        ],
    },
]

export function NavbarWrapper() {
    return (
        <div className="">
            <Navigation />
            <Outlet />
        </div>
    )
}

export const navLinks = [
    {
        path: '/',
        name: 'Home',
    },
    {
        path: '/login',
        name: 'login',
    },
    {
        path: '/register',
        name: 'register',
    },
    {
        path: '/my-learning',
        name: 'learning',
    },
    {
        path: '/course/:id',
        name: 'course',
    },
    {
        path: '/cart',
        name: 'cart',
    },
]
