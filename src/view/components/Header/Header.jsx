import React from "react";
import { Link } from "react-router-dom";

const Header = () => (
  <nav className="navbar navbar-dark bg-dark">
    <Link className="navbar-brand" to="/">
      <img
        src="http://chittagongit.com/download/333137"
        width="30"
        height="30"
        className="d-inline-block align-top mr-2"
        alt=""
      />
      Rick&Morty Wiki
    </Link>
  </nav>
);

export { Header };
