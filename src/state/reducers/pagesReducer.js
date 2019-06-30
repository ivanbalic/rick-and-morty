const initialState = {
  pages: 0,
  currentPage: 1
};

const pagesReducer = (state = initialState, action) => {
  switch (action.type) {
    case "UPDATE_PAGES_FULFILLED":
      state = {
        ...state,
        pages: action.payload
      };
      break;
    case "UPDATE_CURRENTPAGE":
      state = {
        ...state,
        currentPage: action.payload
      };
      break;

    default:
      break;
  }
  return state;
};

export { pagesReducer };
