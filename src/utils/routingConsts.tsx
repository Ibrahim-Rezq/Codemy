import { ForgotPassword, Navigation, SignIn, SignUp } from '../components'
import { Cart, Home, Join, User } from '../pages'

import { Outlet } from 'react-router-dom'

export const routes = [
    {
        path: '/',
        element: <NavbarWrapper />,
        children: [
            {
                path: '/',
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
                // element: <App />,
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
        <div>
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
