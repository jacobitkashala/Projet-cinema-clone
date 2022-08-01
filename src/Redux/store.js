import {configureStore} from '@reduxjs/toolkit';
import genreReducer from './reducerGenre';





export default configureStore({
    reducer:{
      genreMovie:genreReducer,
        
    }
})