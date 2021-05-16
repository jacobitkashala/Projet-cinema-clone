import React from "react";
import { Route, Switch } from "react-router-dom";
import "react-bootstrap";
import PageShow from "./pages/PageShow";//PageShowDetail
import PageShowDetail from "./pages/PageShowDetail";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Serie from "./pages/pageSerie"
const Home = () => {
  return (
    <main className="container">
      <Switch>
        <Route exact path="/" component={PageShow} />
        <Route path="/movie/:id" component={PageShowDetail} />
        <Route path="/Serie/" component={Serie} />
      </Switch>
    </main>
  );
};
export default Home;
