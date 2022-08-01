import { configureStore } from '@reduxjs/toolkit'
import genreReducer from './reducerGenre'
import reseachReducer from './reducerReseach'
import listeMovieReducer from './reducerListMovie'

export default configureStore({
  reducer: {
    genreMovie: genreReducer,
    reseach: reseachReducer,
    listMovie:listeMovieReducer,
  },
})
