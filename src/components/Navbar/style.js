import styled from 'styled-components'

export const Navbar = styled.nav`
display:flex;
justify-content:space-between;
align-items:flex-end;
z-index:100;
`
export const LogoContainer = styled.div`
display:flex;
align-items:center;
padding:0.1rem 0.3rem;
margin-left:1rem;
font-size:32px;
color:${({ theme: { colors } }) => colors.primary};
z-index:100;
`
export const Logo = styled.h2`
font-family: 'Sansita Swashed', cursive;
font-size:30px;
margin-left:1rem;
`