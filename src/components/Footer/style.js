import styled from "styled-components";

export const Footer = styled.div`
display:flex;
justify-content:center;
align-items:center;
height:90px;
width:100%;
text-align:center;
color: ${({ theme: { colors } }) => colors.light};;
background-color: ${({ theme: { colors } }) => colors.dark};
span {
  margin:6px;
   font-size:18px;
  color: ${({ theme: { colors } }) => colors.primary};
}
`