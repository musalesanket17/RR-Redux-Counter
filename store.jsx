import { legacy_createStore } from "redux";
import { Reducer } from "./reducer";

const initState = {
  count: 0
};

export const Store = legacy_createStore(Reducer, initState);
