import { configureStore } from '@reduxjs/toolkit'
import movieReducer from '../features/movies/movieSlice'

export default configureStore({
  reducer: {
    "movies": movieReducer,
  }
})