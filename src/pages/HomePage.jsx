import React, { useEffect, useState } from 'react'
import Header from '../componentShow/Header'
import Listgenre from '../componentShow/ListGenre'
// import { RestDataSource } from '../webservice/RestDataSource'
import Listmovie from '../componentShow/ListMovie'
import Auteur from '../componentShow/Auteur'
import TopMovies from '../componentShow/TopMovie'
import Footer from '../componentShow/Footer'
import { useDispatch, useSelector } from 'react-redux'
import { toGetGenreMovie } from '../Redux/reducerGenre'
import Loader from './../Loader'
export default function HomePage() {
  const [id, setId] = useState('')
  const [dataGenre, setDataGene] = useState('')
  const [load, setLoading] = useState(true)

  const [containsGenreData, setContainsGenreData] = useState([])
  const [isClick, setIsClick] = useState(false)

  const data = useSelector((state) => state.genreMovie)
  console.log(data)
  const dispatch = useDispatch()


  useEffect(() => {
    dispatch(toGetGenreMovie())
  }, [dispatch])

  const clickBtngenre = (id) => {
    setIsClick(true)
    setId(id)
  }

  return (
    <>
      {load ? (
        <>
          <Loader/>
        </>
      ) : (
        <>
          <Header />
          <Listgenre clickBtngenre={clickBtngenre} dataGenre={dataGenre} />
          <Listmovie containsGenreData={containsGenreData} isClick={isClick} />
          <Auteur />
          <TopMovies />
          <Footer />
        </>
      )}
    </>
  )
}
