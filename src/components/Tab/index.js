import React, { useState, useEffect } from 'react'
import { Menu, Navlink, Tab } from './style'

export default ({ modalTab, setActive, active, foodName }) => {
  const Link = foodName !== null ? `${foodName}'s Top Recipes` : 'Top Recipes'
  const [activeL, setActiveL] = useState(true)
  useEffect(() => {
    setActiveL(true)
  }, [foodName])
  return (
    <Tab>
      <Menu>
        {modalTab ? <Navlink onClick={() => setActive(true)} className={active && 'active'} tab >Ingredients</Navlink> :
          <Navlink to='/' className={activeL && 'active'} onClick={() => setActiveL(true)} >{Link}</Navlink>}
        {modalTab ? <Navlink onClick={() => setActive(false)} className={!active && 'active'} tab  >Instrucions</Navlink> :
          <Navlink to='/favRecipes' className={!activeL && 'active'} onClick={() => setActiveL(false)}>Favourite Recipes</Navlink>}
      </Menu>
    </Tab>
  )
}