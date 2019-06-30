const initialState = {
  characters: [],
  singleCharacter: null
};

const characterReducer = (state = initialState, action) => {
  switch (action.type) {
    case "UPDATE_CHARACTERS_FULFILLED":
      state = {
        ...state,
        characters: action.payload
      };
      break;
    case "UPDATE_SINGLE_CHARACTER_FULFILLED":
      state = {
        ...state,
        singleCharacter: action.payload
      };
      break;

    default:
      break;
  }
  return state;
};

export { characterReducer };
