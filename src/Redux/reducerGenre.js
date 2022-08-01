import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

const { REACT_APP_API_KEY } = process.env

export const toGetGenreMovie = createAsyncThunk('List/commande', async () => {
  const response = await fetch(
    `https://api.themoviedb.org/3/genre/movie/list?api_key=${REACT_APP_API_KEY}&language=en-US`,
	{
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
	}
  )
  if (response.ok) {
    const data = await response.json()
    return { data }
  }
})

export const toGetGenreMovieSlice = createSlice({
  name: 'get genre movie',
  initialState: [],
  extraReducers: {
    [toGetGenreMovie.fulfilled]: (state, action) => {
      return action.payload.data
    },
  },
})

export default toGetGenreMovieSlice.reducer
