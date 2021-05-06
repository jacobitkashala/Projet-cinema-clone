import React from 'react';
import {NavLink} from 'react-router-dom';
import * as mdb from 'mdb-ui-kit'; 
import { Input } from 'mdb-ui-kit'; 

export default function MenuEnf() {
    return (
<div className="">
<nav className="navbar-sous enfant navbar navbar-expand-sm navbar-dark bg-dark">
  <div className="container-fluid">
    <nav >
      <ol className="breadcrumb">
        <li className="breadcrumb-item">
          <NavLink exact activeClasseName="actve" to="/Video">Vidéos</NavLink>
        </li>
        <li className="breadcrumb-item">
          <NavLink exact activeClasseName="actve" to="/Personnge" >Personnage</NavLink>
          </li>
        <li className="breadcrumb-item">
          <NavLink exact activeClasseName="actve" to="/Action" >Action</NavLink>
        </li>
        <li className="breadcrumb-item">
          <NavLink exact activeClasseName="actve" to="/Serie"  >Serie</NavLink>
          </li>
        <li className="breadcrumb-item">
          <NavLink exact activeClasseName="actve" to="/Film" >Film</NavLink>
          </li>
        <li className="breadcrumb-item" >
          <NavLink exact activeClasseName="actve" to="/Comic" >Comic</NavLink>
          </li>
      </ol>
    </nav>
  </div>
</nav>
</div>
    )
}
