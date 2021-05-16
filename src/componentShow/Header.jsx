import React, { useRef, useState, useEffect } from "react";
import { NavLink, Link } from "react-router-dom";
import logo from "../image/logo.png";
import load from "../image/load1.jpeg";
import { RestDataSource } from "../webservice/RestDataSource";

export default function Header() {
  const [words, setWords] = useState("");
  const [finding, setFinding] = useState([]);
  const refInput = useRef(null);
  const urlResearch = `https://api.themoviedb.org/3/search/movie?api_key=c8697268acc5406f1d3c61343bbfd606&query=${words}`;
  const restDataSourcefing = new RestDataSource(urlResearch);
  const [decorateur,setDecorateur]=useState("red")

  useEffect(() => {
    restDataSourcefing.getData((data) => {
      setFinding(data);
    });
  }, [words]);
  //console.log(finding);
  const research = (event) => {
    let grabbed = event.target.value;
    setWords((s) => grabbed);
    //console.log(saisie);
  };
  console.log(finding);
  // const show=finding.
  return (
    <div className="row mt-3">
      <div className="col-2 logo">
        <img className="img-fluid" src={logo} alt="le logo" />
      </div>

      <div className=" col-10 nav navigation">
        <ul class="nav nav-pills">
          <li class="nav-item">
            <NavLink activeClasseName="active" exact to="/">
              CINEMA
            </NavLink>
          </li>
          <li class="nav-item">
            <NavLink activeClasseName="active " exact to="/Serie/">
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
              ref={refInput}
              id="inputrecherch"
            />
            <img
              classe="loaderImage"
              id="input"
              ref={refInput}
              src={load}
              alt="loader"
            />
          </div>
          <div className="">
            <p >
              <Link style={{color:`${decorateur}`}} to="{`/movie/${item.id}`}">{`${words} ${decorateur}`}</Link>{" "}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
