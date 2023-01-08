import { Outlet } from 'react-router-dom'
import { ForgotPassword, Navigation, SignIn, SignUp } from '../components'
import { Cart, Home, Join, User, Course } from '../pages'

export const routes = [
    {
        path: '/',
        element: <Home />,
    },
    {
        path: '/login',
        // element: <App />,
    },
    {
        path: '/register',
        // element: <App />,
    },
    {
        path: '/my-learning',
        // element: <App />,
    },
    {
        path: '/course/:id',
        element: <Course />,
    },
    {
        path: '/cart',
        // element: <App />,
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
                ],
            },
            {
                path: '/my-learning',
                // element: <App />,
            },
            {
                path: '/course/:id',
                element:<Course />,
            },
            {
                path: '/cart',
                element: <Cart />,
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
        name: 'carte',
    },
]
