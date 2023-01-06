import React from 'react'

import { ForgotPassword, SignIn, SignUp } from '../components/Authentication'
import { Cart, Home, Join, User } from '../pages'

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
