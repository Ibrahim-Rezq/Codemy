import { addDoc, collection } from 'firebase/firestore'

import { createRandomCourse } from './fakerData'
import { db } from './firebase'
import { SignIn, SignUp } from './user/user'
import { User } from './user/userTypes'

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
async function InjectUserData() {
    try {
        const U = (await SignIn(TestUser1)) as User
        if (!U?.uid && !U?.email) {
            await SignUp(TestUser1)
            await SignUp(TestUser2)
            await SignUp(TestUser3)
            console.log('User Data Injected')
        } else console.log('User Data Alredy Injected')
    } catch (e) {
        console.error('Error adding document: ', e)
    }
}

export default async function injectData() {
    await InjectCourseData()
    await InjectUserData()
    console.log('All Data Injected')
}
