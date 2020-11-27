import styled from 'styled-components'
import headerbg from '../../images/headerbg.jpg'
export const Header = styled.div`
width:100%;
height:530px;
color:${({ theme: { colors } }) => colors.text};
background-image:url(${headerbg});
background-size:cover;
background-position:top;
background-color:${({ theme: { colors } }) => colors.dark};
`
export const Jumbo = styled.div`
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
width:90%;
/* width:70%; */
max-width:620px;
height:calc(100% - 56px);
margin:0 auto;
`
export const Heading = styled.h1`
color:#fff;
font-size:22px;
/* font-size:36px; */
font-weight:600;
line-height:42px;
width:100%;
margin-bottom:18px;
color:#fff;
`