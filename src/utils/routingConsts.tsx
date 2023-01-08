import React from 'react'

import { Home, Course } from '../pages'

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
