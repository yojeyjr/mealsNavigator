import {Meals} from '../../data/Meals';
import {SELECT_FILTER, SET_FILTER, TOGGLE_FAVOURITE} from '../actions/meals';

const initialState = {
  meals: Meals,
  favourties: [],
  filteredMeals: Meals,
  glutenFree: false,
  lactoseFree: false,
  vegan: false,
  vegetarian: false,
};

const mealsReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_FAVOURITE:
      const existingMealIndex = state.favourties.findIndex(
        meal => meal.id === action.mealId,
      );
      if (existingMealIndex >= 0) {
        const updatedFavouruteMeals = [...state.favourties];
        const finalMeal = updatedFavouruteMeals.filter(
          meal => meal.id !== action.mealId,
        );
        return {...state, favourties: finalMeal};
      } else {
        const meal = state.meals.find(meal => meal.id === action.mealId);
        return {...state, favourties: state.favourties.concat(meal)};
      }
    case SET_FILTER:
      const filterType = action.filterOptions.filter;
      const filterValue = action.filterOptions.value;
      if (filterType === 'glutenFree') {
        return {...state, glutenFree: filterValue};
      } else if (filterType === 'lactoseFree') {
        return {...state, lactoseFree: filterValue};
      } else if (filterType === 'vegan') {
        return {...state, vegan: filterValue};
      } else if (filterType === 'vegetarian') {
        return {...state, vegetarian: filterValue};
      }
    case SELECT_FILTER: {
      const updatedMeals = [...state.meals];
      const meals = updatedMeals.filter(meal => {
        if (!meal.inGlutenFree && state.glutenFree) {
          return false;
        } else if (!meal.isLactoseFree && state.lactoseFree) {
          return false;
        } else if (!meal.isVegan && state.vegan) {
          return false;
        } else if (!meal.isVegeterian && state.vegetarian) {
          return false;
        }
        return true;
      });
      const favourties = state.favourties.filter(meal => {
        if (!meal.inGlutenFree && state.glutenFree) {
          return false;
        } else if (!meal.isLactoseFree && state.lactoseFree) {
          return false;
        } else if (!meal.isVegan && state.vegan) {
          return false;
        } else if (!meal.isVegeterian && state.vegetarian) {
          return false;
        }
        return true;
      });
      return {...state, filteredMeals: meals, favourties: favourties};
    }
    default:
      return state;
  }
};

export default mealsReducer;
