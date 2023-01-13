// fire base init file
import { initializeApp } from 'firebase/app'
// import { getAnalytics } from 'firebase/analytics'

//import { } from 'firebase/firestore';
//import { } from 'firebase/auth';

const firebaseConfig = {
    apiKey: 'AIzaSyA8EEsPA_dqx04K_v7fMTAOtYg4GJvF4Gs',
    authDomain: 'codemy-e5921.firebaseapp.com',
    projectId: 'codemy-e5921',
    storageBucket: 'codemy-e5921.appspot.com',
    messagingSenderId: '501982173086',
    appId: '1:501982173086:web:738eba89e349a7b87de88f',
}

const app = initializeApp(firebaseConfig)
// const analytics = getAnalytics(app)
