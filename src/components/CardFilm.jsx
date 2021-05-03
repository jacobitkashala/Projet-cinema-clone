import React from 'react';
import * as mdb from 'mdb-ui-kit'; 
import { Input } from 'mdb-ui-kit'; 

export default function CardFilm() {
    return (
        <div>
<div className="card">
  <div className="bg-image hover-overlay ripple" data-mdb-ripple-color="light">
    <img
      src="https://mdbootstrap.com/img/new/standard/nature/111.jpg"
      className="img-fluid"
    />
    <a href="#">
      <div className="mask" style={{backgroundColor: "rgba(251, 251, 251, 0.15)"}}></div>
    </a>
  </div>
  <div className="card-body">
    <h5 className="card-title">Card title</h5>
    <p className="card-text">
      Some quick example text to build on the card title and make up the bulk of the
      card's content.
    </p>
    <a href="#!" className="btn btn-primary">Button</a>
  </div>
</div>
</div>
    )
}
