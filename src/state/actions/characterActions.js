import { setError } from "./errorActions";
import { characterCommunicator } from "../../communicators/CharacterCommunicator/CharacterCommunicator";

const updateCharacters = (currentPage, dispatch) => {
  return {
    type: "UPDATE_CHARACTERS",
    payload: characterCommunicator
      .getCharacters(currentPage)
      .then(({ characters }) => {
        dispatch(setError(null));
        return characters;
      })
      .catch(({ message }) => {
        dispatch(setError(message));
      })
  };
};

const updateSingleCharacter = (id, dispatch) => {
  return {
    type: "UPDATE_SINGLE_CHARACTER",
    payload: characterCommunicator
      .getSingleCharacter(id)
      .then(singleCharacter => {
        dispatch(setError(null));
        return singleCharacter;
      })
      .catch(({ message }) => {
        dispatch(setError(message));
      })
  };
};

export { updateCharacters, updateSingleCharacter };
