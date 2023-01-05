import React from 'react'

import { Home } from '../pages'
import ForgotPassword from '../pages/Authentication/ForgotPassword'
import SignIn from '../pages/Authentication/SignIn'
import SignUp from '../pages/Authentication/SignUp'

export const routes = [
    {
        path: '/',
        element: <Home />,
    },
    {
        path: '/join/login-popup',
        element: <SignIn />,
    },
    {
        path: '/join/signup-popup',
        element: <SignUp />,
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
