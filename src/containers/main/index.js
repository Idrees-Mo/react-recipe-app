import React, { useContext, useEffect } from 'react'
import { Switch, Route } from 'react-router-dom'
import Tab from '../../components/Tab'
import Recipes from '../../components/Recipes'
import Error from '../../components/Error'
import RecipeContext from '../../context/RecipeContext/index'
import Modal from '../../components/RecipeModal'
import { Main } from './style'

// eslint-disable-next-line
export default () => {
  const { foodName, recipes, favouriteRecipes, showModal, recipe, updateFavouriteRecipes, error, setError } = useContext(RecipeContext)
  useEffect(() => {
    updateFavouriteRecipes({})
    // eslint-disable-next-line 
  }, [])
  const noFavRecipes = favouriteRecipes.length === 1;

  return (
    <>
      <Tab foodName={foodName} recipes={recipes} />
      <Main>
        {error ? <Error error={error} setError={setError} /> :
          <>
            <Switch>
              <Route exact path='/' render={(props) => <Recipes recipes={recipes} />}>
              </Route>
              <Route exact path='/favRecipes' >
                <Recipes recipes={favouriteRecipes} noFavRecipes={noFavRecipes} />
              </Route>
            </Switch>
            {showModal && <Modal recipe={recipe} />}
          </>}
      </Main>
    </>
  )
}