export const user: User = {
    id: '1',
    name: 'hima',
    avatarUrl: '',
    email: 'example@hima.com',
    passwordHash: '',
    courses: [{ id: '1' }],
    type: 'user',
}

export const instructor: User = {
    id: '1',
    name: 'mohamed',
    avatarUrl: '',
    email: 'example@hima.com',
    passwordHash: '',
    description:
        "a course to master react from the begining to the end using moderen techeing and more just some more words to make this description seem longer than it seems and to add more data for usage and don't know what to wright next",
    ratingStars: 4.5,
    rating: 1902,
    coursesCount: 1,
    type: 'instructor',
}

export const review: Review = {
    id: '1',
    userId: '1',
    courseId: '1',
    description:
        "a course to master react from the begining to the end using moderen techeing and more just some more words to make this description seem longer than it seems and to add more data for usage and don't know what to wright next",
    rate: 4,
    created_at: '10-10-2020',
}

export const lecture: Lecture = {
    id: '1',
    courseId: '1',
    name: 'react mastery intro',
    time: 60, //in minutes
    videoUrl: 'www.example.com',
    watched: false,
}

export const course: Course = {
    id: '1',
    name: 'react mastery',
    description: "a course to master react from the begining to the end using moderen techeing and more just some more words to make this description seem longer than it seems and to add more data for usage and don't know what to wright next",
    slug: 'react-mastery',
    requirements: ['English Language', 'javascript Knowlage'],
    ratingStars: 4.5,
    rating: 1902,
    lecturesCount: 10,
    lectures: [
        { id: '1', courseId: '1', name: 'Course Structure and projectes', time: 335 },
        { id: '2', courseId: '1', name: 'Setting up our code editor', time: 560 },
        { id: '3', courseId: '1', name: 'Your Very First Webpage!', time: 900 },
    ],
    reviews: [{ id: '1' }],
    whatYouWellLearn: [
        { id: '1', text: 'Create a React js project from scratch' },
        { id: '2', text: 'Use Firebase auth for complete authentication' },
        { id: '3', text: 'Work with latest versions like React js 18, Firebase 9 and Tailwind CSS 3' },
        { id: '4', text: 'Add forgot password functionality using Firebase auth' },
        {
            id: '5',
            text: 'Learn how to sign up/in the users using username/password and Google oAuth using Firebase auth',
        },
        { id: '6', text: 'Use Firebase Firestore to store and fetch data' },
        { id: '7', text: 'Use Firebase auth for complete authentication' },
    ],
    time: 6050,
    progress: 16,
    students: 5900,
    instructor: 'mohamed',
    instructorId: '1',
    created_at: '10-10-2020',
    updated_at: '15-12-2020',
    price: 34999,
    onSale: true,
    discount: 50,
    bestseller: false,
    language: "",
    subtitle: [],
    topic: [],
    level: "",
    features: []
}
export type User = {
    id: string
    name: string
    avatarUrl: string
    email: string
    passwordHash: string
    type: 'admin' | 'user' | 'instructor'
    // user
    courses?: { id: string }[]
    // instructor
    description?: string
    coursesCount?: 1
    ratingStars?: 4.5
    rating?: 1902
}

export type Review = {
    id: string
    userId: string
    courseId: string
    description: string
    rate: number
    created_at: string // to be set to date later
}

export type Lecture = {
    id: string
    name: string
    courseId: string
    time: number //in minutes
    videoUrl?: string
    watched?: boolean
}

export type Course = {
    id: string
    name: string
    description: string
    slug: string
    requirements: string[]
    ratingStars: number
    rating: number
    lecturesCount: number
    lectures: Lecture[]
    reviews: { id: string }[]
    whatYouWellLearn: { id: string; text: string }[]
    time: number //in minutes
    progress: number // in percent
    students: number
    instructor: string
    instructorId: string
    created_at: string
    updated_at: string
    price: number // cents 349.99$
    onSale: boolean
    discount: number // in percent  34999 * 50%
    bestseller: boolean
    language: string
    subtitle: string[]
    topic:string[]
    level: string
    features: string[]
}
export type Filter = {
    rating: number
    language: string[]
    videoDuration: {min:number,max:number}[]
    features: string[]
    topic: string[]
    level: string[]
    subtitle:  string[]
    price: string[]
}
