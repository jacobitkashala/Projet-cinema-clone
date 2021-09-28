import React, { useEffect, useMemo, useState } from "react";
import { RestDataSource } from "../webservice/RestDataSource";
import logoProduction from "../image/index.jpg";
import "react-bootstrap-carousel/dist/react-bootstrap-carousel.css";
import { FaArrowCircleLeft } from "react-icons/fa";
import { Link } from "react-router-dom";
import inconnue from "../image/Inconnue.jpg"
// import Footer from "../componentShow/Footer";

export default function PagePageShowDetail({ match }) {
  const [primaryInformation, setPrimaryInformation] = useState([]);
  const [actor, setActor] = useState([]);
  const [video, setVideo] = useState();
  let idMovie = match.params.id;

  const urlVideoMovie = `https://api.themoviedb.org/3/movie/${idMovie}/videos?api_key=${process.env.REACT_APP_AMOVIE_API_KEY}&language=en-US`;
  const urlPrimaryInformation = `https://api.themoviedb.org/3/movie/${idMovie}?api_key=${process.env.REACT_APP_AMOVIE_API_KEY}&language=en-US`;
  const urlCastCrew = `https://api.themoviedb.org/3/movie/${idMovie}/credits?api_key=${process.env.REACT_APP_AMOVIE_API_KEY}&language=en-US`;
  const urlImage = "https://image.tmdb.org/t/p/w400/";

  const { restDataSourcePInfo, restDataSourceVideo, restDataSourceCast }
    = useMemo(() => {

      const restDataSourcePInfo = new RestDataSource(urlPrimaryInformation);
      const restDataSourceVideo = new RestDataSource(urlVideoMovie);
      const restDataSourceCast = new RestDataSource(urlCastCrew);

      return { restDataSourcePInfo, restDataSourceVideo, restDataSourceCast }
    }, [urlPrimaryInformation, urlVideoMovie, urlCastCrew])


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

  }, [restDataSourcePInfo,
    restDataSourceVideo,
    restDataSourceCast]);

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
                src={logoProduit}

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
    var { cast } = actor;
    //console.log(cast);
    var actors = cast.map((actor, index) => {
      const imageCast =
      actor.profile_path == null
        ? inconnue
        : urlImage + actor.profile_path;

      return (
        <div key={index} className="col-md-2 col-sm-4">
          <img
            className="img-fluid"
            src={imageCast}
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
        <Link to={"/"}>
          <FaArrowCircleLeft className="fa" />
        </Link>
      </div>
      <div className="row mt-2 text-center">
        <div className="ratio ratio-16x9">
          <iframe
            src={`https://www.youtube.com/embed/${key}?rel=0`}
            title="YouTube video"
            allowFullScreen
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
        <div className="col-12 ">
          <h2 >COMPANIE PRODUCTION :</h2>
        </div>
        <table className="table col-10 w-50 table-dark table-hover table-striped">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Name</th>
              <th scope="col">Origin country</th>
              <th scope="col">Logo</th>
            </tr>
          </thead>
          <tbody>{companieProduction}</tbody>
        </table>
      </div>
      <div className="row mt-3">
        <h2>cast</h2>
        {actors}
      </div>
    </div>
  );
}
