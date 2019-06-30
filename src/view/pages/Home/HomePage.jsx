import { connect } from "react-redux";
import React, { Component, Fragment } from "react";

import CharCard from "./CharCard/CharCard";
import { Loader } from "../../components/Loader/Loader";
import { CharContainer } from "./CharContainer/CharContainer";
import Pagination from "../../components/Pagination/Pagination";
import { updatePages } from "../../../state/actions/pagesActions";
import { updateCharacters } from "../../../state/actions/characterActions";

class HomePage extends Component {
  componentDidUpdate(prevProps) {
    const { currentPage, updateCharacters } = this.props;
    if (prevProps.currentPage !== currentPage) {
      updateCharacters(currentPage);
    }
  }

  componentDidMount() {
    this.props.initialLoad(this.props.currentPage);
  }

  render() {
    const { characters, error, history } = this.props;
    if (error) {
      history.push({
        pathname: "/error",
        state: { message: error }
      });
    }
    return characters.length ? (
      <Fragment>
        <Pagination />
        <CharContainer>
          {characters.map(character => (
            <CharCard key={character.id} character={character} />
          ))}
        </CharContainer>
        <Pagination />
      </Fragment>
    ) : (
      <Loader className="green mt-5" />
    );
  }
}

const mapStateToProps = ({ characterReducer, pagesReducer, errorReducer }) => {
  return {
    currentPage: pagesReducer.currentPage,
    characters: characterReducer.characters,
    error: errorReducer.error
  };
};

const mapDispatchToProps = dispatch => {
  return {
    initialLoad: currentPage => {
      dispatch(updatePages(currentPage, dispatch));
      dispatch(updateCharacters(currentPage, dispatch));
    },
    updateCharacters: currentPage => {
      dispatch(updateCharacters(currentPage, dispatch));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomePage);
