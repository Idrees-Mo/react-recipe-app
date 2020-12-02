import styled from 'styled-components'
import headerbg from '../../images/headerbgA.jpg'

export const Header = styled.div`
width:100%;
height:530px;
color:${({ theme: { colors } }) => colors.text};
background-image:url(${headerbg});
background-size:cover;
background-position:top;
background-color:${({ theme: { colors } }) => colors.dark};
position:relative;
`
export const Jumbo = styled.div`
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
width:90%;
max-width:620px;
height:calc(100% - 56px);
margin:0 auto;
`
export const Heading = styled.h1`
color:#fff;
font-size:30px;
font-weight:600;
line-height:42px;
width:100%;
margin-bottom:18px;
color:#fff;
z-index:100;
@media (min-width: 650px){
  font-size:40px;
  }
`

export const Overlay = styled.div`
position:absolute;
top:0;
left:0;
width:100%;
height:100%;
background-color:rgba(0,0,0,0.5);
z-index:0;
`