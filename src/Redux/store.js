import { configureStore } from '@reduxjs/toolkit'
import genreReducer from './reducerGenre'
import reseachReducer from './reducerReseach'

export default configureStore({
  reducer: {
    genreMovie: genreReducer,
    reseach: reseachReducer,
  },
})
