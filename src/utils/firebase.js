// fire base init file
import { initializeApp } from 'firebase/app'
// import { getAnalytics } from 'firebase/analytics'

//import { } from 'firebase/firestore';
//import { } from 'firebase/auth';

const firebaseConfig = {
    apiKey: 'AIzaSyDfo1PrCJPGzLpith9hziZmN-83wrDoZeQ',
    authDomain: 'codemy-391.firebaseapp.com',
    projectId: 'codemy-391',
    storageBucket: 'codemy-391.appspot.com',
    messagingSenderId: '776638981550',
    appId: '1:776638981550:web:2b05a04e037386b958943f',
    measurementId: 'G-ELMYX4D1KB',
}

const app = initializeApp(firebaseConfig)
// const analytics = getAnalytics(app)
