import { createStore } from "redux";

const initialState = {
  isLogged: false,
  token: "",
  email: "",
};

export const AuthReducer = (state = initialState, action) => {
  if (action.type === "SET_LOGGED_IN_STATE") {
    return { ...state, isLogged: action.payload.value };
  }
  return state;
};

export const AuthStore = createStore(AuthReducer);
