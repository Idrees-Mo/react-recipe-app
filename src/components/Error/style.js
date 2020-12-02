import styled from "styled-components";

export const Container = styled.div`
background-color:red;
display:flex;
align-items:center;
justify-content:center;
height:60px;
margin:20px auto;

@media (min-width: 650px){
  min-width:30rem;
}
`
export const Msg = styled.p`
color:#fff;
font-weight:bold;

span {
color: ${({ theme: { colors } }) => colors.primary};
font-size:18px;
font-weight:900;
margin-right:10px;
}`