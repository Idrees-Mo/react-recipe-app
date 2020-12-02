import React, { useState, useEffect } from 'react'
import { Menu, Navlink, Tab } from './style'

export default ({ modalTab, setActive, active, recipes, foodName }) => {
  const Link = foodName !== null ? `${foodName.toUpperCase()}'s Top Recipes` : 'Top Recipes'
  const [activeL, setActiveL] = useState(true)
  useEffect(() => {
    setActiveL(true)
  }, [recipes])
  return (
    <Tab>
      <Menu>
        {modalTab ? <Navlink onClick={() => setActive(true)} className={active && 'active'} tab >Ingredients</Navlink> :
          <Navlink to='/' className={activeL && 'active'} onClick={() => setActiveL(true)} >{Link}</Navlink>}
        {modalTab ? <Navlink onClick={() => setActive(false)} className={!active && 'active'} tab  >Instrucions</Navlink> :
          <Navlink to='/favRecipes' className={!activeL && 'active'} onClick={() => setActiveL(false)}>Faviourite Recipes</Navlink>}
      </Menu>
    </Tab>
  )
}