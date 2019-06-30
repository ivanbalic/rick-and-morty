const like = id => {
  return {
    type: "TOGGLE_LIKE",
    payload: id
  };
};

const saveLikes = () => {
  return {
    type: "SAVE_LIKES"
  };
};

export { like, saveLikes };
