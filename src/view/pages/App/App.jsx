import React, { Fragment } from "react";
import { Switch, Route } from "react-router-dom";

import HomePage from "../Home/HomePage";
import { ErrorPage } from "../Error/ErrorPage";
import DetailsPage from "../Details/DetailsPage";
import { Footer } from "../../components/Footer/Footer";
import { Header } from "../../components/Header/Header";

const App = () => {
  return (
    <Fragment>
      <Header />
      <main className="container">
        <Switch>
          <Route path="/details" component={DetailsPage} />
          <Route path="/error" component={ErrorPage} />
          <Route path="/" component={HomePage} />
        </Switch>
      </main>
      <Footer />
    </Fragment>
  );
};

export { App };
