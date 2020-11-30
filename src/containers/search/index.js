import React, { useContext, useState } from 'react'
import { withRouter } from 'react-router-dom'
import RecipeContext from '../../context/RecipeContext'
import { FaSearch } from "react-icons/fa";
import { Btn, Form, Input, SearchWrapper, Suggestion } from './style'

const SearchForm = (props) => {
  const { fetchRecipes } = useContext(RecipeContext)
  const [foodName, setFoodName] = useState('')

  const onsubmit = (e) => {
    e.preventDefault()
    fetchRecipes(foodName)
    setFoodName('')
    props.history.push('/');
  }

  return (
    <Form onSubmit={onsubmit}>
      <Input placeholder="Search recipes for your craving" value={foodName}
        onChange={(e) => setFoodName(e.target.value)}
      />
      <Btn type="submit"><FaSearch /></Btn>
      <Suggestion><span>Suggested: </span>chicken curry, pasta , cake, cookies & more</Suggestion>
    </Form>
  )
}
export default withRouter(SearchForm);