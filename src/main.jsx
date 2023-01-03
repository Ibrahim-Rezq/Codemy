import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { HelmetProvider } from 'react-helmet-async'
import {
    BrowserRouter,
    createBrowserRouter,
    RouterProvider,
} from 'react-router-dom'

const rootElement = document.getElementById('root')

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
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
        // element: <App />,
    },
    {
        path: '/cart',
        // element: <App />,
    },
])

const components = (
    <HelmetProvider>
        <RouterProvider router={router} />
    </HelmetProvider>
)

ReactDOM.createRoot(rootElement).render(components)
