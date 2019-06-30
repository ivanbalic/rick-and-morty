const initialState = {
  error: null
};

const errorReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_ERROR":
      state = {
        ...state,
        error: action.payload
      };
      break;

    default:
      break;
  }
  return state;
};

export { errorReducer };
