import React from 'react'

<<<<<<< HEAD
import { Cart, Home } from '../pages'
=======
import { ForgotPassword, SignIn, SignUp } from '../components/Authentication'
import { Cart, Home, Join, User } from '../pages'
>>>>>>> fa9395315d7bd8a0daab6ca80f30d6a7f702a363

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
