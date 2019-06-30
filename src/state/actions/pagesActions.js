import { setError } from "./errorActions";
import { characterCommunicator } from "../../communicators/CharacterCommunicator/CharacterCommunicator";

const updatePages = (currentPage, dispatch) => {
  return {
    type: "UPDATE_PAGES",
    payload: characterCommunicator
      .getCharacters(currentPage)
      .then(({ pages }) => {
        dispatch(setError(null));
        return pages;
      })
      .catch(({ message }) => {
        dispatch(setError(message));
      })
  };
};

const updateCurrentPage = currentPage => {
  return {
    type: "UPDATE_CURRENTPAGE",
    payload: currentPage
  };
};

export { updatePages, updateCurrentPage };
