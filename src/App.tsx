import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import { Navigation } from './components'
<<<<<<< HEAD
import Hero from './components/heroSlider/Hero'
=======
>>>>>>> fa9395315d7bd8a0daab6ca80f30d6a7f702a363
import { routes } from './utils/routingConsts'

const router = createBrowserRouter(routes)

export default function App() {
    return (
        <div className="App">
            <Navigation />
<<<<<<< HEAD
            <Hero />
=======
>>>>>>> fa9395315d7bd8a0daab6ca80f30d6a7f702a363
            <RouterProvider router={router} />
        </div>
    )
}
