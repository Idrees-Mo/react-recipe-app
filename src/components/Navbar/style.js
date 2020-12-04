import styled from 'styled-components'

export const Navbar = styled.nav`
display:flex;
top:0;
cursor: pointer;
justify-content:space-between;
align-items:center;
z-index:200;
padding-bottom:10px;
color:${({ theme: { colors } }) => colors.primary};
transition: all 0.1s ease-in;
@media (min-width: 980px){
position:${({ logo }) => logo && 'fixed'};
color: ${({ logo }) => logo && '#fff'};
}
`
export const LogoContainer = styled.div`
margin-left:1rem;
font-size:32px;
z-index:100;
`
export const Logo = styled.h2`
font-family: 'Sansita Swashed', cursive;
font-size:30px;
`