// fire base init file
import { initializeApp } from 'firebase/app'
import { getAuth, connectAuthEmulator } from 'firebase/auth'
import { getAnalytics } from 'firebase/analytics'

const firebaseConfig = {
    apiKey: 'AIzaSyA8EEsPA_dqx04K_v7fMTAOtYg4GJvF4Gs',
    authDomain: 'codemy-e5921.firebaseapp.com',
    projectId: 'codemy-e5921',
    storageBucket: 'codemy-e5921.appspot.com',
    messagingSenderId: '501982173086',
    appId: '1:501982173086:web:738eba89e349a7b87de88f',
}

const app = initializeApp(firebaseConfig)
const analytics = getAnalytics(app)
export const auth = getAuth(app)
connectAuthEmulator(auth, 'http://localhost:9099')

//9099 auth
//5001 func
//8080 store
//5000 host
//5500 hoUI
