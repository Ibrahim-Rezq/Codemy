import './index.css'

import ReactDOM from 'react-dom/client'
import { HelmetProvider } from 'react-helmet-async'
import { Provider } from 'react-redux'

import App from './App'
import { store } from './redux/store'

const components = (
    <Provider store={store}>
        <HelmetProvider>
            <App />
        </HelmetProvider>
    </Provider>
)

const rootElement = document.querySelector('#root')

rootElement && ReactDOM.createRoot(rootElement).render(components)
