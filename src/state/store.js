import thunk from "redux-thunk";
import promise from "redux-promise-middleware";
import { createStore, combineReducers, applyMiddleware } from "redux";

import { likeReducer } from "./reducers/likeReducer";
import { pagesReducer } from "./reducers/pagesReducer";
import { errorReducer } from "./reducers/errorReducer";
import { characterReducer } from "./reducers/characterReducer";

const store = createStore(
  combineReducers({
    characterReducer,
    pagesReducer,
    likeReducer,
    errorReducer
  }),
  {},
  applyMiddleware(thunk, promise)
);

export { store };
