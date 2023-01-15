import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Course, Filter } from '../../../utils/tempData'
const initialState: Course[] = []

export const filterSlice = createSlice({
    name: 'filteredCourses',
    initialState,
    reducers: {
        filterCourses:{
                reducer: (state, action:PayloadAction<Course[]>) => {
            return state = action.payload
        },
            prepare: (courses: Course[], filters: Filter[]) => {
                let filteredCourses:[]=[]
                filters.forEach((filter) => {
                    let filterName: string = filter.name
                    filteredCourses = courses.filter((course) => {
                        return course[filterName] === filter.value
                    })
                })
                return {payload : filteredCourses}
            },
        }
    },
})
