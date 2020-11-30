import React from 'react'
import { Menu, Navlink, Tab } from './style'

export default function index({ modalTab, setActive }) {
  return (
    <Tab>
      <Menu>
        {modalTab ? <Navlink onClick={() => setActive(true)} >Recipes</Navlink> :
          <Navlink to='/' >Recipes</Navlink>}
        {modalTab ? <Navlink onClick={() => setActive(false)} >Ingredients</Navlink> :
          <Navlink to='/favRecipes' >Fav Recipes</Navlink>}
      </Menu>
    </Tab>
  )
}
