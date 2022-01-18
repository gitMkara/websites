import { createContext } from "react";

const INITIAL_STATE = {
  user: null,
  isFetching: false,
  error: false,
};
const LOGIN_SUCCESS = {
  user: null,
  isFetching: false,
  error: false,
};
const LOGIN_FAILURE = {
  user: null,
  isFetching: false,
  error: false,
};

export const Context = createContext(INITIAL_STATE);

export const ContextProvider = ({ children }) => {};
