import React from "react";
import "./loader.css";

export default function Loader(){
  
  return( 
  <div className="loanding">
      
    <div className="loanding-spinner"></div>
    <div className="laoding-dots">
      <div className="bounce"></div>
      <div className="bounce1"></div>
      <div className="bounce2"></div>
    </div>
  </div>);
}

