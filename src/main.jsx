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
import { Provider } from 'react-redux'
import { store } from './redux/store'

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
    <Provider store={store}>
        <HelmetProvider>
            <RouterProvider router={router} />
        </HelmetProvider>
    </Provider>
)

ReactDOM.createRoot(rootElement).render(components)
