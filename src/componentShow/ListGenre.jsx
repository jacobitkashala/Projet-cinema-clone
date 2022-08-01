import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { toGetGenreMovie } from '../Redux/reducerGenre'
export default function ListGenre({ clickBtngenre }) {
  const [genreMovie, setGenreMovie] = useState([])
  const dataGenreMovie = useSelector((state) => state.genreMovie)
  const dispatch = useDispatch()
  // const [dataGenre, setDataGene] = useState('')
  console.log(dataGenreMovie)

  useEffect(() => {
    dispatch(toGetGenreMovie())
  }, [dispatch])

  let genres = []

  if (genreMovie.genres !== undefined) {
    genres = [...genreMovie.genres]
  }

  return (
    <div className="container">
      <div className="row mt-3">
        <div className="col">
          <div className="list-inline-item">
            <div>
              {genres.map((item, index) => (
                <button
                  key={index}
                  type="button"
                  className="btn btn-outline-info"
                  onClick={() => {
                    clickBtngenre(item.id) //diplayMoviesWithGenre
                  }}
                >
                  {item.name}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
