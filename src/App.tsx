import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Navigation } from './components'
import Hero from './components/heroSlider/Hero'
import { routes } from './utils/routingConsts'

const router = createBrowserRouter(routes)

export default function App() {
    return (
        <div className="App">
            <Navigation />
            <Hero />
            <RouterProvider router={router} />
        </div>
    )
}
