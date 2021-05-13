import React, { useRef } from "react";
import { NavLink } from "react-router-dom";
import logo from "../image/logo.png";
import load from "../image/load1.jpeg";

export default function Header() {
  const refInput = useRef(null);
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
            <NavLink activeClasseName="active " exact to="Série/">
              SERIE
            </NavLink>
          </li>
        </ul>
        <div className="col-4">
          <input className="" type="text" name="" id="inputrecherch" />
          <img
            classe="loaderImage"
            id="input"
            ref={refInput}
            src={load}
            alt="loader"
          />
        </div>
      </div>
    </div>
  );
}
