import { configureStore } from '@reduxjs/toolkit'
import sumReducer from './slices/sumSlice'
import sizeReducer from './slices/sizeSlice'

export default configureStore({
    reducer: {
        sum: sumReducer,
        size: sizeReducer,
    },
})