import { addDoc, collection } from 'firebase/firestore'

import { createRandomCourse } from './fakerData'
import { db } from './firebase'

const TestUser1 = { email: 'test_1@example.test', password: 'testpass1234', name: 'tester no_1' }
const TestUser2 = { email: 'test_2@example.test', password: 'testpass1234', name: 'tester no_2' }
const TestUser3 = { email: 'test_3@example.test', password: 'testpass1234', name: 'tester no_3' }

async function InjectCourseData() {
    try {
        await addDoc(collection(db, 'courses'), { ...createRandomCourse() })
        await addDoc(collection(db, 'courses'), { ...createRandomCourse() })
        await addDoc(collection(db, 'courses'), { ...createRandomCourse() })
        await addDoc(collection(db, 'courses'), { ...createRandomCourse() })
        console.log('Courses Data Injected')
    } catch (e) {
        console.error('Error adding document: ', e)
    }
}

export default async function injectData() {
    await InjectCourseData()
    console.log('All Data Injected')
}
