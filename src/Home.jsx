import React from "react";
import { Route, Switch } from "react-router-dom";
import "react-bootstrap";
import PageShow from "./pages/PageShow";
import PagePageShowDetail from "./pages/PagePageShowDetail";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from "./components/Loader";
import Header from "./componentShow/Header";

const Home = () => {
  return (
    <main className="container">
   
      <Switch>
        <Route exact path="/" component={PageShow} />
        <Route path="/movie/:id" component={PagePageShowDetail} />
      </Switch>
    </main>
  );
};
export default Home;
