import { createSelector } from "reselect";

const signUpSelector = (state) => state.registerUser;

export const signUpUserData = createSelector(
  signUpSelector,
  (user) => user.user
);    