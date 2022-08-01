import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import Listgenre from '../components/ListGenre'
import Listmovie from '../components/ListMovie'
// import Auteur from '../components/Auteur'
// import TopMovies from '../components/TopMovie'
// import Footer from '../components/Footer'
import { useDispatch, useSelector } from 'react-redux'
import { toGetGenreMovie } from '../Redux/reducerGenre'
import { listMovie } from '../Redux/reducerListMovie'
import Loader from './../Loader'

export default function HomePage() {
  const [, setId] = useState('')
  const [page] = useState(0)
  const [load, setLoading] = useState(false)
  const [isClick, setIsClick] = useState(false)

  const [containsGenreData, setContainsGenreData] = useState([])
  const dataGereMovieGet = useSelector((state) => state.genreMovie)
  const listTopMovie = useSelector((state) => state.listMovie)

  const dispatch = useDispatch()
  const { genres } = dataGereMovieGet

  useEffect(() => {
    dispatch(toGetGenreMovie())
     
  }, [dispatch])

  const clickBtngenre = (id) => {
    setIsClick(true)
    setId(id)
  }
  setLoading(false)
  
  if (genres !== undefined) {
    // dispatch(listMovie(page))
    // console.log(genres)
    // setLoading((prevState) => false)
  }

  return (
    <>
      {load ? (
        <div>
          <Loader />
        </div>
      ) : (
        <div>
          <Header />
          <Listgenre clickBtngenre={clickBtngenre} dataGenre={genres} />
          <Listmovie
            containsGenreData={containsGenreData}
            listTopMovie={listTopMovie}
            isClick={isClick}
          />
          {/*<Auteur />
          <TopMovies />
          <Footer /> */}
        </div>
      )}
    </>
  )
}
