const setError = error => {
  return {
    type: "SET_ERROR",
    payload: error
  };
};

export { setError };
