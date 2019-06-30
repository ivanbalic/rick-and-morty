import React from "react";

import "./Loader.css";

const Loader = ({ className }) => {
  return (
    <div className="sk-circle">
      <div className={`sk-circle1 sk-child ${className}`} />
      <div className={`sk-circle2 sk-child ${className}`} />
      <div className={`sk-circle3 sk-child ${className}`} />
      <div className={`sk-circle4 sk-child ${className}`} />
      <div className={`sk-circle5 sk-child ${className}`} />
      <div className={`sk-circle6 sk-child ${className}`} />
      <div className={`sk-circle7 sk-child ${className}`} />
      <div className={`sk-circle8 sk-child ${className}`} />
      <div className={`sk-circle9 sk-child ${className}`} />
      <div className={`sk-circle10 sk-child ${className}`} />
      <div className={`sk-circle11 sk-child ${className}`} />
      <div className={`sk-circle12 sk-child ${className}`} />
    </div>
  );
};

export { Loader };
