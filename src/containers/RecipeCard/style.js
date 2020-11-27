import styled from "styled-components";

export const Card = styled.div`
display:flex;
align-items:flex-end;
justify-content:space-around;
width:210px;
height:270px;
padding:7px;
color:#fff;
font-size:18px;
margin:20px 10px;
background-image:linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.9)),url(${props => props.url});
background-size:cover;
background-position:center;
object-fit:center;
border-radius:12px;
position:relative;
transition: all .3s ease-in-out;
box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.1);
overflow:hidden;
& h2 {
  display:block;
  position:absolute;
  left:0px;
  bottom:-70px;
  width:100%;
  text-align:center;
  padding:20px 0;
  font-size:16px;
  background-color:rgba(0, 0, 0, 0.6);
  cursor: pointer;
  color:tomato;
  transition: all .3s ease-in-out;
  opacity:0.9;
:hover {
 opacity:1;
 transition:opacity .1s ease-in;
}
  }

:hover {
  box-shadow: 0px 6px 6px rgba(0, 0, 0, 0.1);
   margin-top:10px;
   padding-bottom:70px;
   & h2 {
      bottom:0px;
       }
    }
`
export const Title = styled.h1`
font-size:18px;
color:#fff;
`
export const Heart = styled.div`
font-size:18px;
color:#fff;
cursor: pointer;
`