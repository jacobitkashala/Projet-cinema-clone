import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

const { REACT_APP_API_KEY } = process.env

export const toMovieReseach = createAsyncThunk(
  'List/Reseach',
  async (words) => {
    const response = await fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=${REACT_APP_API_KEY}&query=${words}&language=en-US`,
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
  },
)

export const toGetReseachSlice = createSlice({
  name: 'get reseach',
  initialState: [],
  extraReducers: {
    [toMovieReseach.fulfilled]: (state, action) => {
      return action.payload.data
    },
  },
})

export default toGetReseachSlice.reducer
