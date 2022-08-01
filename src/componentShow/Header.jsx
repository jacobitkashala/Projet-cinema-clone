import React, { useState, useEffect, useMemo } from 'react'
import { NavLink, Link } from 'react-router-dom'
// import logo from '../image/logo.png'
// import logo from "../imagelogoSp.png";

import load from '../image/load1.jpeg'
import { RestDataSource } from '../webservice/RestDataSource'

export default function Header() {
  const [words, setWords] = useState('')
  const [finding, setFinding] = useState([])
  const [opacit, setopacit] = useState(0)
  const urlResearch = `https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_AMOVIE_API_KEY}&query=${words}`

  const restDataSource = useMemo(() => {
    const restDataSource = new RestDataSource(urlResearch)
    return restDataSource
  }, [urlResearch])

  useEffect(() => {
    restDataSource.getData((data) => {
      setFinding(data)
    })
  }, [restDataSource])

  const research = (event) => {
    let value = event.target.value
    setWords((s) => value)
    setopacit(1)
    value === '' ? setopacit(0) : setopacit(1)
  }

  return (
    <div className="row mt-3">
      {/* <div className="col-2" style={{ fontWeight: '900', fontSize: '20px' }}> */}
      {/* <span style={{ fontWeight: '900', fontSize: '2rem', color: '#fff' }}>Zender</span> <span className="suffixe" >Ciné</span> */}
      {/* <img className="img-fluid" alt="le logo" /> */}
      {/* </div> */}
      <div className=" col-10 nav navigation">
        <ul className="nav nav-pills">
          <li className="nav-item">
            <NavLink exact to="/">
              CINEMA
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink exact to="/Serie/">
              SERIE
            </NavLink>
          </li>
        </ul>
        <div className="col-4">
          <div className="">
            <input
              className=""
              type="text"
              onChange={research}
              id="inputrecherch"
            />
            <img
              className="loaderImage"
              style={{ opacity: opacit }}
              id="input"
              src={load}
              alt="loader"
            />
          </div>
          <div className="">
            <p>
              <Link
                to={{
                  pathname: '/resulat/',
                  state: {
                    dataReseach: finding,
                  },
                }}
              >
                {words}
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
