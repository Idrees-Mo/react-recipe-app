import React from 'react'
import styled from 'styled-components'
import RecipeCard from '../../containers/RecipeCard'

import {
  Container,
  FavRecipes,
} from './style'

export default function ({ recipes, noFavRecipes }) {
  return (

    <Container>
      <FavRecipes>
        {noFavRecipes && <Msg>You don't have faviourite recipes, please add from recipes.</Msg>}
        {recipes.map(recipe => recipe.id && <RecipeCard recipe={recipe} key={recipe.id} />)}
      </FavRecipes>
    </Container>
  )
}

const Msg = styled.p`
background-color: #333;
color:orange;
padding:.5rem;
margin-top:20px;
`