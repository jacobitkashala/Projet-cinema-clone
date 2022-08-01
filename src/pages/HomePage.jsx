import React, { useEffect, useState } from 'react'
import Header from '../componentShow/Header'
import Listgenre from '../componentShow/ListGenre'
// import Listmovie from '../componentShow/ListMovie'
// import Auteur from '../componentShow/Auteur'
// import TopMovies from '../componentShow/TopMovie'
// import Footer from '../componentShow/Footer'
import { useDispatch, useSelector } from 'react-redux'
import { toGetGenreMovie } from '../Redux/reducerGenre'
import Loader from './../Loader'

export default function HomePage() {
  const [id, setId] = useState('')
  const [load, setLoading] = useState(false)
  const [isClick, setIsClick] = useState(false)
  const [dataGenre, setDataGene] = useState([])
  const [containsGenreData, setContainsGenreData] = useState([])
  const dataGereMovieGet = useSelector((state) => state.genreMovie)

  const dispatch = useDispatch()
  const { genres } = dataGereMovieGet

  useEffect(() => {
    dispatch(toGetGenreMovie())
  }, [dispatch])

  const clickBtngenre = (id) => {
    setIsClick(true)
    setId(id)
  }

  if (genres != undefined) {
    // console.log(genres)
    // setLoading((prevState) => false)
  }

  return (
    <>
      {load ? (
        <>
          <Loader />
        </>
      ) : (
        <>
          <Header />
          <Listgenre clickBtngenre={clickBtngenre} dataGenre={genres} />
          {/* <Listmovie containsGenreData={containsGenreData} isClick={isClick} />
          <Auteur />
          <TopMovies />
          <Footer /> */}
        </>
      )}
    </>
  )
}
