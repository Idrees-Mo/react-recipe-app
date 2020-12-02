import React, { useReducer } from 'react'
import axio from 'axios'
import Context from './index'
import data from '../../data/data.json'
import reducer from './reducer'
import { FETCH_RECIPES, UPDATE_FAV_RECIPES, FETCH_RECIPE, TOGGLE_MODAL, TOGGLE_LOADING, SET_ERROR } from '../Types'

const base_url = process.env.REACT_APP_BASE_URL
const api_key = process.env.REACT_APP_API_KEY

const RecipeState = (props) => {
  const initialState = {
    foodName: null,
    recipes: data.recipes,
    favouriteRecipes: JSON.parse(localStorage.getItem('favouriteRecipes')) || [],
    recipe: {},
    showModal: false,
    loading: false,
    error: null,
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
    toggleLoading()
    try {
      const response = await axio.get(url)
      const recipes = response.data.results
      if (recipes === undefined || recipes.length === 0) {
        setError({ message: `can't find recipe for ${foodName}` })
        toggleLoading()
        return;
      }
      dispatch({
        type: FETCH_RECIPES,
        payload: { foodName, recipes }
      })
      toggleLoading()
    } catch (error) {
      setError(error)
      console.log(error)
      toggleLoading()
    }
    updateFavouriteRecipes({})
  }

  // fetch Single Recipe
  const fetchRecipe = async (recipe) => {
    if (recipe.id === state.recipe.id) return toggleModal()
    toggleLoading()
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
      toggleLoading()
      toggleModal()
    } catch (error) {
      setError(error)
      toggleLoading()
      console.log(error)
    }
  }

  const toggleModal = () => {
    dispatch({
      type: TOGGLE_MODAL
    })
  }
  const toggleLoading = () => {
    dispatch({
      type: TOGGLE_LOADING
    })
  }

  const setError = (error) => {
    dispatch({
      type: SET_ERROR,
      payload: error,
    })
  }

  return (
    <Context.Provider value={{
      foodName: state.foodName,
      recipes: state.recipes,
      favouriteRecipes: state.favouriteRecipes,
      updateFavouriteRecipes,
      recipe: state.recipe,
      showModal: state.showModal,
      loading: state.loading,
      error: state.error,
      fetchRecipes,
      fetchRecipe,
      toggleModal,
      toggleLoading,
      setError
    }} >
      {props.children}
    </Context.Provider>
  )
}

export default RecipeState;