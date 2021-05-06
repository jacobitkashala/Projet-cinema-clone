import React from 'react'
import * as mdb from 'mdb-ui-kit'; 
import { Input } from 'mdb-ui-kit'; 

export default function MenuEnf() {
    return (
<div className="">
<nav className="navbar-sous navbar navbar-expand-sm navbar-dark bg-dark">
  <div className="container-fluid">
    <nav aria-label="breadcrumb">
      <ol className="breadcrumb">
        <li className="breadcrumb-item"><a href="#">Vidéos</a></li>
        <li className="breadcrumb-item"><a href="#">Personnage</a></li>
        <li className="breadcrumb-item"><a href="#">Action</a></li>
        <li className="breadcrumb-item"><a href="#">Serie</a></li>
        <li className="breadcrumb-item"><a href="#">Film</a></li>
        <li className="breadcrumb-item" aria-current="page"><a href="#">Comic</a></li>
      </ol>
    </nav>
  </div>
</nav>
</div>
    )
}
