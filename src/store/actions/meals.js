export const TOGGLE_FAVOURITE = 'TOGGLE_FAVOURITE';
export const SET_FILTER = 'SET_FILTER';
export const SELECT_FILTER = 'SELECT_FILTER';

export const toggleFavourite = id => {
  return {type: TOGGLE_FAVOURITE, mealId: id};
};

export const selectFilter = () => {
  return {type: SELECT_FILTER};
};

export const setFilters = (filter, value) => {
  return {type: SET_FILTER, filterOptions: {filter: filter, value: value}};
};
