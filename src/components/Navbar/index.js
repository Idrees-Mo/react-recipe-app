import React from 'react'
import { FaHamburger } from "react-icons/fa";
import {
  Navbar,
  LogoContainer,
  Logo,
} from './style'

export default function () {
  return (
    <Navbar >
      <LogoContainer>
        <FaHamburger />
        <Logo>Recipe Finder</Logo>
      </LogoContainer>
    </Navbar>
  )
}