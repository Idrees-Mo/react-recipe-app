import React, { useContext } from 'react'
import RecipeContext from '../../context/RecipeContext'
import { FaRegHeart, FaHeart } from "react-icons/fa";
import { Card, Heart, Title } from './style'

const RecipeCard = ({ recipe }) => {
  const { updateFavouriteRecipes, fetchRecipe } = useContext(RecipeContext)
  const { image, title, fav } = recipe;
  const heartClick = (e) => {
    e.stopPropagation();
    updateFavouriteRecipes(recipe);
  }
  const viewRecipe = (e) => {
    e.stopPropagation();
    fetchRecipe(recipe)
  }
  return (
    <Card url={image} >
      <h2 onClick={viewRecipe}>View Recipe</h2>
      <Title>{title}</Title>
      <Heart onClick={heartClick}>
        {fav ? <FaHeart style={{ color: 'red' }} /> : <FaRegHeart />}
      </Heart>
    </Card>
  )
}
export default RecipeCard;