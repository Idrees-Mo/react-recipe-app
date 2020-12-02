import styled from "styled-components";
import { Link } from "react-router-dom"
export const Tab = styled.div`
position:sticky;
top:0;
width:100%;
height:60px;
color:red;
display:flex;
justify-content:center;
align-items:center;
background-color:#111;
z-index:100;
`
export const Menu = styled.ul`
display:flex;
justify-content:center;
align-items:center;
`
export const Navlink = styled(Link)`
font-family: 'Sansita Swashed', cursive;
letter-spacing:3px;
color:#fff;
padding-bottom:0.2rem;
margin: ${props => props.tab ? '0 20px' : '0 40px'};
transition: 0.1s all;
border-bottom: 3px solid transparent;
font-size:18px;
@media (min-width: 650px){
  margin: ${props => props.tab ? '0 90px' : '0 90px'};
 }
&.active {
border-bottom: 3px solid orange;
}
`