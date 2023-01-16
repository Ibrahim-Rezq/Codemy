import { createSlice, PayloadAction, PrepareAction } from '@reduxjs/toolkit'
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
    name: 'courseReducer',
    initialState,
    reducers: {
        updateFilters: (state, action) => {
            return (state = action.payload)
        },
        filterCourses: {
            reducer: (state, action) => {
                return (state.filteredCourses = action.payload)
            },
            prepare: (courses:Course[], filters: Filter) => {
                const {rating,
                    language,
                    videoDuration,
                    features,
                    topic,
                    level,
                    subtitle,
                    price
            }=filters
            if(rating){
               return courses = courses.filter(course=>course.rating>=rating)
            }
            if(price.length){
                return courses= courses.filter(course=>{
                    if(price[0]==='free'||price[1]==='free'){
                        return  course.price===0
                    }
                    if(price[0]==='paid'||price[1]==='paid'){
                        return  course.price>0
                    }
                })
            }
                return  {payload:courses}
        },
    },
})
export const { updateFilters,filterCourses } = courseSlice.actions
export const currentFilter = (state: { filters: Filter }) => state.filters
export const courses = (state: { courses: Course[] }) => state.courses
export const filteredCourses = (state: { filteredCourses: Course[] }) => state.filteredCourses
export default courseSlice.reducer