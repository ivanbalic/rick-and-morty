import React, { Fragment } from "react";

const TypeInfo = ({ data }) => {
  const { type, species } = data;
  return (
    <Fragment>
      <h3 className="text-success">Type Info</h3>
      <p className="lead pl-3">Species: {species ? species : "-"}</p>
      <p className="lead pl-3">Type: {type ? type : "-"}</p>
    </Fragment>
  );
};

export { TypeInfo };
