import React, { useState, useEffect } from "react";
import { RestDataSource } from "../webservice/RestDataSource";
import logoProduction from "../image/spiderman_new_100px - Copie.png";
import "react-bootstrap-carousel/dist/react-bootstrap-carousel.css";
import { FaArrowCircleLeft } from "react-icons/fa";
import { Link } from "react-router-dom";
import { Modal } from "react-bootstrap";

import ReactPlay from "react-player";
import YouTubePlayer from "react-player/youtube";
import Footer from "../componentShow/Footer";

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
        const logoProduit =
          companie.logo_path == null
            ? logoProduction
            : urlImage + companie.logo_path;

        return (
          <tr key={index} className="datacompanie">
            <th scope="row">{index + 1}</th>
            <td>{companie.name}</td>
            <td>{companie.origin_country}</td>
            <td>
              <img
                className="img-fluid"
                style={{ width: "100px", height: "100px" }}
                src={urlImage + companie.logo_path}
                alt={companie.name}
              />
            </td>
          </tr>
        );
      }
    );
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
        </div>
      );
    });
  }

  return (
    <div className="container">
      <div className="row mt-3">
        <Link exact to={"/"}>
          <FaArrowCircleLeft className="fa" />
        </Link>
      </div>
      <div className="row mt-2 text-center">
        <div class="ratio ratio-16x9">
          <iframe
            src={`https://www.youtube.com/embed/${key}?rel=0`}
            title="YouTube video"
            allowfullscreen
          ></iframe>
        </div>
      </div>

      <div className="row mt-3">
        <div>
          <h2 style={{ fontWeight: "bolder" }}>GENRE</h2>
        </div>
        <div>{genreLists}</div>
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
      <div className="row mt">
        <Footer />
      </div>
    </div>
  );
}
