import React, { useContext, useEffect } from 'react'
import { Switch, Route } from 'react-router-dom'
import Tab from '../../components/Tab'
import Recipes from '../../components/Recipes'
import RecipeContext from '../../context/RecipeContext/index'
// import Modal from '../../components/RecipeModal'
import { Main } from './style'

// eslint-disable-next-line
export default () => {
  const { recipes, favouriteRecipes, updateFavouriteRecipes } = useContext(RecipeContext)
  useEffect(() => {
    updateFavouriteRecipes({})
    // eslint-disable-next-line 
  }, [])
  return (
    <>
      <Tab />
      <Main>
        <Switch>
          <Route exact path='/' >
            <Recipes recipes={recipes} />
          </Route>
          <Route exact path='/favRecipes' >
            <Recipes recipes={favouriteRecipes} />
          </Route>
        </Switch>
      </Main>
    </>
  )
}