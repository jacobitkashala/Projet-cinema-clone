import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

const { REACT_APP_API_KEY } = process.env
export const listMovie = createAsyncThunk('List/movie', async (page) => {
  const response = await fetch(
    `https://api.themoviedb.org/3/movie/now_playing?api_key=${REACT_APP_API_KEY}&language=en-US&page=${page}`,
    {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    },
  )
  if (response.ok) {
    const data = await response.json()
    return { data }
  }
})

export const listMovieSlice = createSlice({
  name: 'get list movie',
  initialState: [],
  extraReducers: {
    [listMovie.fulfilled]: (state, action) => {
      return action.payload.data
    },
  },
})

export default listMovieSlice.reducer
