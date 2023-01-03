import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Home } from './pages'
const router = createBrowserRouter([
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
        // element: <App />,
    },
    {
        path: '/cart',
        // element: <App />,
    },
])

function App() {
    return (
        <div className='App'>
            <RouterProvider router={router} />
        </div>
    )
}

export default App
