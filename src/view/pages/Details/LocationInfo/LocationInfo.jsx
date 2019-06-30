import React, { Fragment } from "react";

const LocationInfo = ({ data }) => {
  const { origin, location } = data;
  return (
    <Fragment>
      <h3 className="text-success">Location Info</h3>
      <p className="lead pl-3">Origin: {origin ? origin : "-"}</p>
      <p className="lead pl-3">Location: {location ? location : "-"}</p>
    </Fragment>
  );
};
export { LocationInfo };
