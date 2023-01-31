import { collection, doc, getDoc, getDocs, limit, query, where } from 'firebase/firestore'

import { db } from '../firebase'

const collectionRef = collection(db, 'courses')

export const getAllCourses = async (coursesLimit: number) => {
    const courses: Course[] = []
    const coursesQuery = query(collectionRef, limit(coursesLimit))
    const querySnapshot = await getDocs(coursesQuery)
    if (querySnapshot.size > 0) {
        querySnapshot.forEach((doc) => {
            courses.push({ id: doc.id, ...doc.data() } as Course)
        })
        return courses
    }
    throw new Error('No courses found.')
}

export const getBestSellerCourses = async () => {
    const courses: Course[] = []
    const bestSellerQuery = query(collectionRef, where('isBestSeller', '==', true))
    const querySnapshot = await getDocs(bestSellerQuery)
    if (querySnapshot.size > 0) {
        querySnapshot.forEach((doc) => {
            courses.push({ id: doc.id, ...doc.data() } as Course)
        })
        return courses
    }
    throw new Error('No courses found')
}

export const getCoursesWithDiscount = async () => {
    const courses: Course[] = []
    const isDiscountedQuery = query(collectionRef, where('isDiscounted', '==', true))
    const querySnapshot = await getDocs(isDiscountedQuery)
    if (querySnapshot.size > 0) {
        querySnapshot.forEach((doc) => {
            courses.push({ id: doc.id, ...doc.data() } as Course)
        })
        return courses
    }
    throw new Error('No courses found')
}

export const getCoursesByCategory = async (category: string) => {
    const courses: Course[] = []
    const categoryQuery = query(collectionRef, where('category', 'array-contains', category))
    const querySnapshot = await getDocs(categoryQuery)
    if (querySnapshot.size > 0) {
        querySnapshot.forEach((doc) => {
            courses.push({ id: doc.id, ...doc.data() } as Course)
        })
        return courses
    }
    throw new Error('No courses found.')
}

export const getCourseById = async (id: string) => {
    const docRef = doc(db, 'courses', id)
    const course = await getDoc(docRef)
    if (!course.exists()) {
        throw new Error('Course not found.')
    }
    return course.data() as Course
}

export const getCourseBySlug = async (slug: string) => {
    const slugQuery = query(collectionRef, where('slug', '==', slug), limit(1))
    const doc = await getDocs(slugQuery)
    if (doc.size > 0) {
        return doc.docs[0].data() as Course
    }
    throw new Error('Course not found.')
}
