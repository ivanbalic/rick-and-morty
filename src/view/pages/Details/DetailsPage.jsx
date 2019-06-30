import { connect } from "react-redux";
import { Link } from "react-router-dom";
import React, { Component } from "react";

import { TypeInfo } from "./TypeInfo/TypeInfo";
import { Loader } from "../../components/Loader/Loader";
import { PersonalInfo } from "./PersonalInfo/PersonalInfo";
import { LocationInfo } from "./LocationInfo/LocationInfo";
import { updateSingleCharacter } from "../../../state/actions/characterActions";

class DetailsPage extends Component {
  componentDidMount() {
    const { getCharacter, location } = this.props;
    getCharacter(location.state.id);
  }

  render() {
    const { character, error, history } = this.props;
    if (error) {
      history.push({
        pathname: "/error",
        state: { message: error }
      });
    }
    if (!character) {
      return <Loader className="green mt-5" />;
    }
    const {
      name,
      type,
      image,
      origin,
      status,
      gender,
      species,
      location
    } = character;
    return (
      <div className="bg-purple p-3 my-5">
        <div className="row">
          <div className="col-12 mb-3">
            <Link to="/" className="text-success">
              <i className="fas fa-chevron-left" />
              GO BACK
            </Link>
          </div>
        </div>
        <div className="row mb-5 px-3">
          <div className="col-sm-12 col-lg-6 p-0 rounded">
            <img src={image} className="rounded-circle w-100" alt="character" />
          </div>
          <div className="col-sm-12 col-lg-6 py-3 text-white rounded">
            <PersonalInfo data={{ name, status, gender }} />
          </div>
        </div>
        <hr className="hr-green" />
        <div className="row">
          <div className="col-12 text-white">
            <TypeInfo data={{ type, species }} />
          </div>
          <hr className="hr-green col-12" />
          <div className="col-12 text-white">
            <LocationInfo data={{ origin, location }} />
          </div>
        </div>
        <hr className="hr-green" />
      </div>
    );
  }
}

const mapStateToProps = ({ characterReducer, errorReducer }) => {
  return {
    character: characterReducer.singleCharacter,
    error: errorReducer.error
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getCharacter: id => {
      dispatch(updateSingleCharacter(id, dispatch));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DetailsPage);
