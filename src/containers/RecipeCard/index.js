import React, { useContext } from 'react'
import RecipeContext from '../../context/RecipeContext'
import { FaRegHeart, FaHeart } from "react-icons/fa";
import { Card, Heart, Title } from './style'

export default function ({ recipe }) {
  const { updateFavouriteRecipes } = useContext(RecipeContext)
  const { image, title, fav } = recipe;
  const heartClick = (e) => {
    e.stopPropagation();

  }
  return (
    <Card url={image} >
      <h2>View Recipe</h2>
      <Title>{title}</Title>
      <Heart onClick={() => updateFavouriteRecipes(recipe)}>
        {fav ? <FaHeart style={{ color: 'red' }} /> : <FaRegHeart />}
      </Heart>
    </Card>
  )
}