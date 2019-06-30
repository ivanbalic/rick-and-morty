import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

import { like, saveLikes } from "../../../../state/actions/likeActions";

import "./CharCard.css";

const CharCard = ({ character, history, like, likeList }) => {
  const { id, name, image } = character;

  const handleClick = () => {
    history.push({
      pathname: "/details",
      state: {
        id
      }
    });
  };

  const className =
    likeList.indexOf(id) !== -1
      ? "btn-success"
      : "btn-outline-success bg-white";

  return (
    <div
      className="card col-sm-12 col-md-6 col-lg-3 border-0 mb-5 transparent rounded hover-shadow pr-0"
      onClick={handleClick}
    >
      <img src={image} className="card-img-top rounded-top" alt="character" />
      <div className="card-body bg-light rounded-bottom d-flex flex-column justify-content-between">
        <h5 className="card-title text-dark">{name}</h5>
        <button
          className={`btn ${className} float-right`}
          onClick={event => {
            event.stopPropagation();
            like(id);
          }}
        >
          <i className="far fa-thumbs-up" />
          Like
        </button>
      </div>
    </div>
  );
};

const mapStateToProps = ({ likeReducer }) => {
  return { likeList: likeReducer.likeList };
};

const mapDispatchToProps = dispatch => {
  return {
    like: id => {
      dispatch(like(id));
      dispatch(saveLikes());
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(CharCard));
