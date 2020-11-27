import { UPDATE_FAV_RECIPES } from "../Types"

export default function (state, action) {
  switch (action.type) {
    case UPDATE_FAV_RECIPES:
      let updatedFavRecipes;
      let updatedRecipes;
      if (action.payload.fav) {
        updatedFavRecipes = [...state.favouriteRecipes.filter((item) => item.id !== action.payload.id)]
      } else {
        updatedFavRecipes = [...state.favouriteRecipes.filter((item) => item.id !== action.payload.id), { ...action.payload, fav: true }]
      }

      const favouriteIds = updatedFavRecipes.map(favouriteRecipe => favouriteRecipe.id)
      updatedRecipes = [...state.recipes.map((item) => item.id === favouriteIds.find((id) => id === item.id) ? { ...item, fav: true } : { ...item, fav: false })]

      localStorage.setItem('favouriteRecipes', JSON.stringify([...updatedFavRecipes]))
      return {
        ...state,
        favouriteRecipes: updatedFavRecipes,
        recipes: updatedRecipes,
      }
    default: {
      return state
    }
  }
}