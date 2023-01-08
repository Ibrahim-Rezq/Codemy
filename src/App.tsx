import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Navigation } from './components'

import { routes } from './utils/routingConsts'

const router = createBrowserRouter(routes)

export default function App() {
    return (
        <div className="App">
            <RouterProvider router={router} />
        </div>
    )
}
