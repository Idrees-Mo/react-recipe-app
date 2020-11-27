import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const Navbar = styled.nav`
display:flex;
justify-content:space-between;
align-items:flex-end;
`
export const LogoContainer = styled.div`
display:flex;
align-items:center;
padding:1rem;
font-size:38px;
color:orange;
`
export const Logo = styled.h2`
color:#fff;
font-size:28px;
margin-left:1rem;
border-bottom:1px solid orange;
`
export const Menu = styled.ul`
`
export const NavLink = styled(Link)`
`