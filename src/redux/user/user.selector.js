import { createSelector } from "reselect";

const signUpSelector = (state) => state.user;

export const signUpUserData = createSelector(
  signUpSelector,
  (user) => user.user
);    