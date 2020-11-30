import { FETCH_RECIPES, UPDATE_FAV_RECIPES, FETCH_RECIPE, TOGGLE_MODAL } from "../Types"

export default function (state, action) {
  switch (action.type) {

    case UPDATE_FAV_RECIPES:

      let updatedFavRecipes = [...state.favouriteRecipes.filter((item) => item.id !== action.payload.id)];
      if (!action.payload.fav) {
        updatedFavRecipes = [...updatedFavRecipes, { ...action.payload, fav: true }]
      }
      localStorage.setItem('favouriteRecipes', JSON.stringify([...updatedFavRecipes]))

      const favouriteIds = updatedFavRecipes.map(item => item.id)
      let updatedRecipes;
      updatedRecipes = [...state.recipes.map((item) => item.id === favouriteIds.find((id) => id === item.id) ? { ...item, fav: true } : { ...item, fav: false })]

      return {
        ...state,
        favouriteRecipes: updatedFavRecipes,
        recipes: updatedRecipes,
      }
    case FETCH_RECIPES:
      return {
        ...state,
        recipes: action.payload
      }
    case FETCH_RECIPE:
      console.log(action.payload)
      return {
        ...state,
        recipe: action.payload
      }

    case TOGGLE_MODAL:
      return {
        ...state,
        showModal: !state.showModal
      }

    default: {
      return state
    }
  }
}