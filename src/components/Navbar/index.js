import React, { useState } from 'react'
import { FaAngleUp } from "react-icons/fa";
import { animateScroll as scroll } from 'react-scroll'
import {
  Navbar,
  LogoContainer,
  Logo,
} from './style'

export default function Nav() {
  const [logo, setLogo] = useState(false)

  window.addEventListener('scroll', () => {
    if (window.scrollY >= 530) {
      setLogo(true)
    } else {
      setLogo(false)
    }
  })
  const toTop = () => {
    scroll.scrollToTop()
  }

  return (
    <Navbar logo={logo}>
      <LogoContainer>
        <Logo onClick={toTop}>Recipe Finder</Logo>
      </LogoContainer>
      <FaAngleUp onClick={toTop}
        style={{
          position: 'fixed',
          bottom: '30',
          right: '30',
          fontSize: '30px',
          display: 'inline',
        }} />
    </Navbar>
  )
}