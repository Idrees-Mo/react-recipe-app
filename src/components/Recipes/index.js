import React from 'react'
import RecipeCard from '../../containers/RecipeCard'

import {
  Container,
  FavRecipes,
  Title
} from './style'

export default function ({ recipes }) {
  return (
    <Container>
      <Title > Your favioute recipes </Title>
      <FavRecipes>
        {recipes.map(recipe => recipe.id && <RecipeCard recipe={recipe} key={recipe.id} />)}
      </FavRecipes>
    </Container>
  )
}