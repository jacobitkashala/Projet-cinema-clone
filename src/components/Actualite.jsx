import React from "react";
import img3 from "../image/hero1.jpg";
import * as mdb from "mdb-ui-kit"; // lib
import { Input } from "mdb-ui-kit"; // module
//<img src={img1} alt="Titre Image" />

export default function Hero() {
  return (
    <div className="container-fluid">
      <div
        className="p-5 text-center bg-image col-sm-11"
        style={{
          marginTop: "4rem",
          background: "url(" + `${img3}` + ")  no-repeat",
          height: "70vh",
          width: "95vw",
        }}
      >
        <div className="d-flex row w-25 dflexrow">
          <div className="text-white p-2 col-sm-3">
            <h1 className="mb-2 ">Titre:Film</h1>
            <h4 className="mb-2">Minute:</h4>
            <h4 className="mb-2">Niveau:</h4>
            <a
              className="btn btn-outline-light btn-sm-5"
              href="#!"
              role="button"
            >
              Play
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
