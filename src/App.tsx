import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import { routes } from './utils/routingConsts'

const router = createBrowserRouter(routes)

export default function App() {
    return (
        <div className="overflow-hidden">
            <RouterProvider router={router} />
        </div>
    )
}
