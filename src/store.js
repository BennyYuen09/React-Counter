import { configureStore } from '@reduxjs/toolkit'
import sumReducer from './slices/sumSlice'

export default configureStore({
    reducer: {
        sum: sumReducer,
    },
})