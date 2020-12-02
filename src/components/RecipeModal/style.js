import styled from "styled-components";

export const Modal = styled.div`
position:fixed;
top:0;
left:0;
width:100%;
height:100%;
display:flex;
justify-content:center;
align-items:center;
background-color:rgba(0,0,0,0.9);
color:#fff;
z-index:1000;
`
export const Container = styled.div`
display:flex;
flex-direction:column;
align-items:flex-start;
width:19.2em;
height:38em;
background-color:#fff;
color:#000;
overflow:auto;

position: relative;
.close {
  position: absolute;
  top:0;
  right:0;
  font-size:20px;
}
@media (min-width: 650px){
flex-direction:row;
width:62em;
}
`

export const Img = styled.img`
width:100%;
max-height:20em;
max-width:22em;
`
export const Title = styled.h2`
font-family: 'Sansita Swashed', cursive;
margin-top:-2.3rem;
padding: 0 0.3rem;
color:#fff;
background: rgb(0,0,0);
background: linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(255,255,255,0) 101%);


@media (min-width: 650px){
background:none;
text-align:center;
margin:0;
padding:0.2em;
color:#000;
}
`

export const Content = styled.div`
width:100%;
min-height:100%;
overflow:hidden;

table {
  font-family: arial, sans-serif;
  border-collapse: collapse;
  width: 100%;
}

td, th {
  text-align: left;
  padding: 8px;
}

tr:nth-child(even) {
  background-color: #dddddd;
}
@media (min-width: 650px){
min-width:26em;
overflow:auto;
}
`
export const Header = styled.div`
display:flex;
width:100%;
flex-direction:column;
`
export const Intructions = styled.ul`
span {
  position:absolute;
  top:0px;
  left:-10px;
  background-color:orange;
  border:1px solid #111;
  border-radius:20px;
  padding: 0.1em 0.6em;
  margin-right:0em;
}
p {
  position:relative;
  padding-left:2em;
  margin-top:1em;
  margin-left:1em;
}
`