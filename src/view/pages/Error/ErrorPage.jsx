import React from "react";
import { Link } from "react-router-dom";

const ErrorPage = props => {
  return (
    <div className="d-flex flex-column justify-content-center align-items-center height-100 text-white my-5 bg-purple">
      <img
        className="rounded-circle"
        src="https://www.geek.com/wp-content/uploads/2016/05/rickandmorty-2-625x350.jpg"
        alt="error"
      />
      <h1>404 Ops, something bad happened!</h1>
      <h2>{props.location.state.message}</h2>
      <button className="btn btn-success mt-3">
        <Link to="/" className="text-white">
          <i className="fas fa-running" /> Let's get out of here!
        </Link>
      </button>
    </div>
  );
};
export { ErrorPage };
