import styled from "styled-components";
import { Link } from "react-router-dom"
export const Tab = styled.div`
width:100%;
height:30px;
color:red;
display:flex;
justify-content:center;
align-items:center;
background-color:#111;
`
export const Menu = styled.ul`
display:flex;
justify-content:center;
align-items:center;
`
export const Navlink = styled(Link)`
color:#fff;
padding:20px 40px;
`