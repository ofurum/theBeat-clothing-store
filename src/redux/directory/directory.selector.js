import { createSelector } from "reselect";

const getProducts = (state) => state.directory


export const getAllProducts = createSelector(
    [getProducts],
   (directory) => directory.products
);

