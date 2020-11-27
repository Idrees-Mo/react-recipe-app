import React, { useReducer } from 'react'
import Context from './index'
import data from '../../data/data.json'
import reducer from './reducer'
import { UPDATE_FAV_RECIPES, } from '../Types'

const RecipeState = (props) => {

  const initialState = {
    recipes: data.recipes,
    favouriteRecipes: JSON.parse(localStorage.getItem('favouriteRecipes')) || [],
    recipe: {
      ingredients: [],
      instructions: []
    }
  }
  const [state, dispatch] = useReducer(reducer, initialState)

  const updateFavouriteRecipes = (recipe) => {
    dispatch({
      type: UPDATE_FAV_RECIPES,
      payload: recipe
    })
  }

  return (
    <Context.Provider value={{
      recipes: state.recipes,
      favouriteRecipes: state.favouriteRecipes,
      updateFavouriteRecipes,
    }} >
      {props.children}
    </Context.Provider>
  )
}

export default RecipeState