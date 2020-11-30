import React, { useReducer } from 'react'
import axio from 'axios'
import Context from './index'
import data from '../../data/data.json'
import reducer from './reducer'
import { FETCH_RECIPES, UPDATE_FAV_RECIPES, FETCH_RECIPE, TOGGLE_MODAL } from '../Types'

const base_url = process.env.REACT_APP_BASE_URL
const api_key = process.env.REACT_APP_API_KEY


const RecipeState = (props) => {

  const initialState = {
    recipes: data.recipes,
    favouriteRecipes: JSON.parse(localStorage.getItem('favouriteRecipes')) || [],
    recipe: {},
    showModal: false,
  }
  const [state, dispatch] = useReducer(reducer, initialState)
  // update recipe/recipes
  const updateFavouriteRecipes = (recipe) => {
    dispatch({
      type: UPDATE_FAV_RECIPES,
      payload: recipe
    })
  }

  // get recipes 
  const fetchRecipes = async (foodName) => {
    const url = `${base_url}complexSearch?apiKey=${api_key}&query=${foodName}&number=30`
    try {
      const response = await axio.get(url)
      dispatch({
        type: FETCH_RECIPES,
        payload: response.data.results
      })
    } catch (error) {
      console.log(error)
    }
    updateFavouriteRecipes({})
  }

  // fetch Single Recipe
  const fetchRecipe = async (recipe) => {
    if (recipe.id === state.recipe.id) return toggleModal()
    try {
      const res_ing = await axio.get(`${base_url}${recipe.id}/ingredientWidget.json?apiKey=${api_key}`)
      const res_ins = await axio.get(`${base_url}${recipe.id}/analyzedInstructions?apiKey=${api_key}`)
      dispatch({
        type: FETCH_RECIPE,
        payload: {
          ...recipe,
          ingredients: res_ing.data.ingredients,
          instructions: res_ins.data[0].steps,
        }

      })
      toggleModal()
    } catch (error) {
      console.log(error)
    }
  }

  const toggleModal = () => {
    dispatch({
      type: TOGGLE_MODAL
    })
  }

  return (
    <Context.Provider value={{
      recipes: state.recipes,
      favouriteRecipes: state.favouriteRecipes,
      updateFavouriteRecipes,
      recipe: state.recipe,
      showModal: state.showModal,
      fetchRecipes,
      fetchRecipe,
      toggleModal
    }} >
      {props.children}
    </Context.Provider>
  )
}

export default RecipeState