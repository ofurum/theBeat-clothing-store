import { createSelector } from "reselect";

const initializeFetched = (state) => state.fetchIntilize;

export const initializeFetchedData = createSelector(
    initializeFetched,
    (data) => data.data
);