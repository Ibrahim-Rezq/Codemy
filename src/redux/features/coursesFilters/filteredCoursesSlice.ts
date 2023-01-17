import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Course, Filter } from '../../../utils/tempData'
const initialState: { courses: Course[]; filters: {}; filteredCourses: Course[] } = {
    courses: [],
    filters: {
        rating: 0,
        language: [],
        videoDuration: [],
        features: [],
        topic: [],
        level: [],
        subtitle: [],
        price: [],
    },
    filteredCourses: [],
}

export const courseSlice = createSlice({
    name: 'course',
    initialState,
    reducers: {
        updateFilters: (state, action) => {
            return (state.filters = action.payload)
        },
        filterCourses: {
            reducer: (state, action: PayloadAction<Course[]>) => {
                state.filteredCourses = action.payload
            },
            prepare: (courses, filters: Filter) => {
                let filteredCourses: [] = []
                const { rating, price, language, videoDuration, features, topic, level, subtitle } = filters
                filteredCourses = courses.filter((course: Course) => {
                    if(course.ratingStars < rating) return false
                    if (price.length) {
                        if (price.indexOf('paid') !== -1 && price.indexOf('free') !== -1) {
                        }
                        if (price.indexOf('paid') !== -1 && price.indexOf('free') === -1 && course.price === 0)
                            return false
                        if (price.indexOf('paid') === -1 && price.indexOf('free') !== -1 && course.price > 0)
                            return false
                    }
                    if (language.length) {
                        if (language.every((lang) => lang !== course.language)) return false
                    }
                    if (subtitle.length) {
                        if (subtitle.every((lang) => !course.subtitle.includes(lang))) return false
                    }
                    if (topic.length) {
                        if (topic.every((topic) => !course.topic.includes(topic))) return false
                    }
                    if (level.length) {
                        if (level.indexOf('all') !== -1) {
                        } else {
                            if (level.every((level) => level !== course.level)) return false
                        }
                    }
                    if (features.length) {
                        if (features.every((feat) => !course.features.includes(feat))) return false
                    }
                    if (videoDuration.length) {
                        let lengthInHours = course.time / 60
                        if (
                            videoDuration.every(
                                (duration) => duration.min > lengthInHours || duration.max < lengthInHours,
                            )
                        )
                            return false
                    }

                    return true
                })

                return { payload: filteredCourses }
            },
        },
    },
})
export const { updateFilters, filterCourses } = courseSlice.actions
export const currentFilter = (state: { filters: Filter }) => state.filters
export const courses = (state: { courses: Course[] }) => state.courses
export const filteredCourses = (state: { filteredCourses: Course[] }) => state.filteredCourses
export default courseSlice.reducer
