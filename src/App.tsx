import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import { Navigation } from './components'
import Hero from './components/home/Hero'
import { routes } from './utils/routingConsts'

const router = createBrowserRouter(routes)

export default function App() {
    return (
        <div className="App">
            <Navigation />

            <RouterProvider router={router} />
        </div>
    )
}
