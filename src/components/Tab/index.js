import React from 'react'
import { Menu, Navlink, Tab } from './style'

export default function index() {
  return (
    <Tab>
      <Menu>
        <Navlink to='/' >Recipes</Navlink>
        <Navlink to='/favRecipes' >Fav Recipes</Navlink>
      </Menu>
    </Tab>
  )
}
