import React, { Fragment } from "react";

const PersonalInfo = ({ data }) => {
  const { name, gender, status } = data;
  return (
    <Fragment>
      <h1 className="text-success">{name ? name : "-"}</h1>
      <h4 className="pl-3">
        Gender:{" "}
        {gender ? (
          gender === "Female" ? (
            <i className="fas fa-venus" />
          ) : (
            <i className="fas fa-mars" />
          )
        ) : (
          "-"
        )}
      </h4>
      <p className="lead pl-3">Status: {status ? status : "-"}</p>
    </Fragment>
  );
};

export { PersonalInfo };
