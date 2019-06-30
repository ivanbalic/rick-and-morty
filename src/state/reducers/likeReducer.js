const initialState = {
  likeList: JSON.parse(sessionStorage.getItem("likeList")) || []
};

const likeReducer = (state = initialState, action) => {
  const createNewList = () => {
    if (state.likeList.indexOf(action.payload) !== -1) {
      const newLikelist = state.likeList.filter(
        currentId => currentId !== action.payload
      );
      return newLikelist;
    }
    return [...state.likeList, action.payload];
  };
  switch (action.type) {
    case "TOGGLE_LIKE":
      state = {
        ...state,
        likeList: createNewList()
      };
      break;
    case "SAVE_LIKES":
      sessionStorage.setItem("likeList", JSON.stringify(state.likeList));
      break;

    default:
      break;
  }
  return state;
};

export { likeReducer };
