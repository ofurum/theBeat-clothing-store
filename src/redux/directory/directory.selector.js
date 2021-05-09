import { createSelector } from "reselect";

const getProducts = (state) => state.directory
 
// const getSearch = (state) => state.search;

export const getAllProducts = createSelector(
    [getProducts],
   (directory) => directory.products
);
export const searchItems = createSelector(
  getProducts,
  (searchItems) => searchItems.search
);

