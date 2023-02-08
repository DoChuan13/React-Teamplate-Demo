import { createStore } from "redux";
import reducersList from "../reducers";

export const storeValue = createStore(reducersList);
