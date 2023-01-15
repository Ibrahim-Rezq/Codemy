import { createSlice } from '@reduxjs/toolkit'
import { Filter } from '../../../utils/tempData';

const initialState: Filter[] = [
    {
        name: 'rating',
        active: false,
        value: '',
    },
]
export const filterSlice = createSlice({
    name: 'filters',
    initialState,
    reducers: {
        addFilter: (state, action: { type: any; payload: Filter }) => {
            ;[...state, action.payload]
        },
        removeFilter: (state, action: { type: any; payload: Filter }) => {
            state.filter((filter) => filter !== action.payload)
        },
    },
})
export const { addFilter, removeFilter } = filterSlice.actions
export const currentFilter = (state: { filters: Filter[] }) => state.filters
export default filterSlice.reducer
