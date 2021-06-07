import React, { useState, useEffect } from "react";
import { NavLink, Link } from "react-router-dom";
import logo from "../image/logo.png";
import load from "../image/load1.jpeg";
import { RestDataSource } from "../webservice/RestDataSource";

export default function Header() {

  const [words, setWords] = useState("");
  const [finding, setFinding] = useState([]);
  const [opacit, setopacit] = useState(0);
  const urlResearch = `https://api.themoviedb.org/3/search/movie?api_key=c8697268acc5406f1d3c61343bbfd606&query=${words}`;
  const restDataSource = new RestDataSource(urlResearch);

  useEffect(() => {
    restDataSource.getData((data) => {
      setFinding(data);
    });
  }, []);

  const research = (event) => {
    let value = event.target.value;
    setWords((s) => value);
    setopacit(1);
    value === "" ? setopacit(0) : setopacit(1);
  };

  return (
    <div className="row mt-3">
      <div className="col-2 logo">
        <img className="img-fluid" src={logo} alt="le logo" />
      </div>
      <div className=" col-10 nav navigation">
        <ul class="nav nav-pills">
          <li class="nav-item">
            <NavLink activeclasseName="active" exact to="/">
              CINEMA
            </NavLink>
          </li>
          <li class="nav-item">
            <NavLink activeclasseName="active " exact to="/Serie/">
              SERIE
            </NavLink>
          </li>
        </ul>
        <div className="col-4">
          <div className="">
            <input
              className=""
              type="text"
              name=""
              onChange={research}
              id="inputrecherch"
            />
            <img
              classe="loaderImage"
              style={{ opacity: opacit }}
              id="input"
              src={load}
              alt="loader"
            />
          </div>
          <div className="">
            <p>
              <Link
                exact
                to={{
                  pathname: "/resulat/",
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
  );
}
