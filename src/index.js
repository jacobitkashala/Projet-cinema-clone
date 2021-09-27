import React from 'react';
import ReactDOM from 'react-dom';
import "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-bootstrap-carousel";
import "bootstrap/dist/css/bootstrap.css";
import "react-bootstrap-carousel/dist/react-bootstrap-carousel.css";

import './index.css';
import Home from './Home';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.render(
  <BrowserRouter>
     <Home />
  </BrowserRouter>,
   

  document.getElementById('root')
);

reportWebVitals();
