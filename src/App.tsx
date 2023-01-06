import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Hero from './components/heroSlider/Hero'

import { routes } from './utils/routingConsts'

const router = createBrowserRouter(routes)

export default function App() {
    return (
        <div className="App">
            <Hero />
            <RouterProvider router={router} />
        </div>
    )
}
