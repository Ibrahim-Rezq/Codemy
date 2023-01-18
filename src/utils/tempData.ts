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
    starsRating: 4.5,
    rating: 1902,
    coursesCount: 1,
    type: 'instructor',
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
    starsRating?: 4.5
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
    title: string
    description: string
    imageURL: string
    slug: string
    requirements: string[]
    starsRating: number
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
    isDiscounted: boolean
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
