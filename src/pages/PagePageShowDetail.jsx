import React, { useState, useEffect } from "react";
import { RestDataSource } from "../webservice/RestDataSource";
import "react-bootstrap-carousel/dist/react-bootstrap-carousel.css";
import { FaArrowCircleLeft } from "react-icons/fa";
import { Link } from "react-router-dom";
import { Modal } from "react-bootstrap";

import ReactPlay from "react-player";
import YouTubePlayer from "react-player/youtube";
import Loader from "../components/Loader";

export default function PagePageShowDetail({ match }) {
  const [primaryInformation, setPrimaryInformation] = useState([]);
  const [actor, setActor] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [video, setVideo] = useState();
  let idMovie = match.params.id;

  const urlVideoMovie = `https://api.themoviedb.org/3/movie/${idMovie}/videos?api_key=c8697268acc5406f1d3c61343bbfd606&language=en-US`;
  const urlPrimaryInformation = `https://api.themoviedb.org/3/movie/${idMovie}?api_key=c8697268acc5406f1d3c61343bbfd606&language=en-US`;
  const urlCastCrew = `https://api.themoviedb.org/3/movie/${idMovie}/credits?api_key=c8697268acc5406f1d3c61343bbfd606&language=en-US`;
  const urlImage = "https://image.tmdb.org/t/p/w400/";

  const restDataSourcePInfo = new RestDataSource(urlPrimaryInformation);
  const restDataSourceVideo = new RestDataSource(urlVideoMovie);
  const restDataSourceCast = new RestDataSource(urlCastCrew);

  useEffect(() => {
    restDataSourcePInfo.getData((data) => {
      setPrimaryInformation(data);
      restDataSourceVideo.getData((dataMovie) => {
        setVideo(dataMovie.results[0]);
      });
      restDataSourceCast.getData((dataActor) => {
        setActor(dataActor);
      });
    });
  }, [idMovie]);
  if (video !== undefined) {
    var videoPlay = video;
    var key = videoPlay.key;
  }
  if (primaryInformation.genres !== undefined) {
    var companieProduction = primaryInformation.production_companies.map(
      (companie, index) => {
        return (
          <tr key={index} className="datacompanie">
            <th scope="row">{index + 1}</th>
            <td>{companie.name}</td>
            <td>{companie.origin_country}</td>
            <td>{companie.logo_path}</td>
          </tr>
        );
      }
    );
    //const { backdrop_path,budget,homepage,genres,overview,production_companies,popularity,production_companies,poster_path,release_date,title,vote_average,vote_count}=primaryInformation
    var genreLists = primaryInformation.genres.map((genre, index) => {
      return (
        <li key={index} className="list-inline-item">
          <button key={index} type="button" className="btn btn-outline-info">
            {genre.name}
          </button>
        </li>
      );
    });
  }
  if (actor.crew !== undefined) {
    var { crew, cast } = actor;
    console.log(cast);
    var actors = cast.slice(0, 10).map((actor, index) => {
      return (
        <div key={index} className="col-md-2 col-sm-4">
          <img
            className="img-fluid"
            src={urlImage + actor.profile_path}
            alt={actor.name}
          />
          <h5 style={{ fontWeight: "border" }}>{actor.name} </h5>
          {/* <div className="row mt-3"> <h2>P</h2>{popularity}</div> */}
        </div>
      );
    });
  }
  const MoviePlays = (props) => {
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-titre-vcenter"
        centred
      >
        <Modal.Header
          closeButton
          style={{ backgroundColor: "#fff", color: "#000" }}
        >
          <Modal.Title id="container-modal-title-vcenter">
            {primaryInformation.title}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body style={{ background: "#000" }}>
          <ReactPlay
            className="container-fluid"
            url={`https://www.youtube.com/watch?v=${key}`}
            playing
            width="100%"
          ></ReactPlay>
        </Modal.Body>
      </Modal>
    );
  };

  return (
    <div>
      <Link exact to={"/"}>
        <FaArrowCircleLeft className="fa" />
      </Link>
      <div className="container">
        <div className="row mt-2 text-center">
          <MoviePlays
            style={{ backgroundColor: "transparant", color: "#000" }}
            show={isOpen}
            onHide={() => {
              setIsOpen(false);
            }}
          ></MoviePlays>
          <div className="col text-center">
            <img
              className="img-fluid"
              src={`https://image.tmdb.org/t/p/original/${primaryInformation.backdrop_path}`}
              alt=""
            />
            <div className="carosel-caption movietitle">
              {primaryInformation.title}
            </div>
            <svg
              onClick={() => {
                setIsOpen(true);
              }}
              aria-hidden="true"
              focusable="false"
              data-prefix="fas"
              data-icon="play-circle"
              class="svg-inline--fa fa-play-circle fa-w-16"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
              width="10%"
              className="play-circle"
            >
              <path
                fill="#f4c10f"
                d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm115.7 272l-176 101c-15.8 8.8-35.7-2.5-35.7-21V152c0-18.4 19.8-29.8 35.7-21l176 107c16.4 9.2 16.4 32.9 0 42z"
              />
            </svg>
          </div>
        </div>

        <div className="row mt-3">
          <div className="col">
            <h2 style={{ fontWeight: "bolder" }}>GENRE</h2>
          </div>
          <ul className="list-inline">{genreLists}</ul>
        </div>

        <div className="row mt-3">
          <div className="col">
            <h2 style={{ fontWeight: "bolder" }}>OVERVIEW:</h2>
          </div>
          <p className="">{primaryInformation.overview}</p>
        </div>

        <div className="row mt-3  ">
          <div className="col-4 ">
            <h2 style={{ fontWeight: "bolder" }}>PRODUCTION COMPANIE:</h2>
          </div>
          <table class="table col-4 w-75 table-dark table-hover table-striped">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Name</th>
                <th scope="col">Pays</th>
                <th scope="col">Logo</th>
              </tr>
            </thead>
            <tbody>{companieProduction}</tbody>
          </table>
        </div>

        <div className="row mt-3">
          <h2>Acteurs</h2>
          {actors}
        </div>
      </div>
    </div>
  );
}
