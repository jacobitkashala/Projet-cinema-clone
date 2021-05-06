import React, { Component } from "react";
import Menu from './Menu';
import ErrorPage from './ErrorPage';
import Collection from './Collection';
import News from './News';
import {BrowserRouter,Route,Switch} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

function Navigation() {
  return (
            <BrowserRouter>
                    <Menu/>
                    <Route exact path="/" component={News}/>
                    <Route  strict path="/Collection" component={Collection}  />       
            </BrowserRouter>
  );
}

export default Navigation;
