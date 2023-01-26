ts
declare module '*.svg'
declare module '*.png'
declare module '*.jpg'
declare module '*.jpeg'
declare module '*.webp'

type JsonB<T = unknown> = Record<string, T>

type Review = {
    id: string
    userId: string
    courseId: string
    description: string
    rate: number
    created_at: string // to be set to date later
}

type Lecture = {
    id: string
    name: string
    courseId: string
    time: number //in minutes
    videoUrl?: string
    watched?: boolean
}

type Course = {
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
    isBestSeller: boolean
    language: string
    subtitle: string[]
    categories: string[]
    level: string
    features: string[]
}

type Filter = {
    rating: number
    language: string[]
    videoDuration: { min: number; max: number }[]
    features: string[]
    topic: string[]
    level: string[]
    subtitle: string[]
    price: string[]
}
