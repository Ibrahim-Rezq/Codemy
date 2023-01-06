import React from 'react'

import ForgotPassword from '../components/Authentication/ForgotPassword'
import SignIn from '../components/Authentication/SignIn'
import SignUp from '../components/Authentication/SignUp'
import { Home } from '../pages'
import Join from '../pages/Join'

export const routes = [
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
        path: '/user/forgot-password',
        element: <ForgotPassword />,
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
        // element: <App />,
    },
]

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
