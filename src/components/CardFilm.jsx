import React from 'react';
import mortalCombat from '../image/mortal.jpeg'
import * as mdb from 'mdb-ui-kit'; 
import { Input } from 'mdb-ui-kit'; 

export default function CardFilm() {
    return (
  <div className="contenaire-card">
    <div className="card col-sm-4">
      <div className="bg-image hover-overlay ripple" data-mdb-ripple-color="light">
        <img
          src={mortalCombat}
          className="img-fluid"
        />
        <a href="#">
          <div className="mask" style={{backgroundColor: "rgba(251, 251, 251, 0.15)"}}></div>
        </a>
      </div>
      <div className="card-body">
        <h5 className="card-title">Titre: Film</h5>
        <h5 className="card-title">Année: Mai 2020</h5>
        <p className="card-text">
          Présentation et resumer du film Some quick example text to build on the card title and make up the bulk of the
          card's content.
        </p>
        <input type='bton' className="btn btn-primary" value="Button" />
      </div>
    </div>
  </div>
    )
}
