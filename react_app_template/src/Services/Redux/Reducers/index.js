import { combineReducers } from "redux";

import stateReducer from "./reducderList/stateReducer";
import notifyReducer from "./reducderList/notifyReducer";

const reducersList = combineReducers({
  stateReducer: stateReducer,
  notify: notifyReducer,
});

export default reducersList;
