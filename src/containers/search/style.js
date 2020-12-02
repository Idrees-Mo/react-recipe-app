import styled from 'styled-components'

export const Form = styled.form`
width:100%;
z-index:100;
`
export const Input = styled.input`
width:85%;
border:none;
padding:1rem 1.2rem;
border-top-left-radius:5px;
border-bottom-left-radius:5px;
background-color:#fff;
font-weight:500;
font-size:18px;
color:#000;
`
export const Btn = styled.button`
width:15%;
border:none;
padding: 1rem;
padding-top: calc(1rem - 2px);
border-top-right-radius:5px;
border-bottom-right-radius:5px;
background-color:#fff;
font-weight:300;
font-size:18px;
color:gray;
cursor: pointer;
`
export const Suggestion = styled.p`
display:inline-block;
color:#fff;
margin-top:10px;
/* font-weight:200; */
font-weight:100;
font-size:12px; // no font-size on bigger ones 
padding:3px;
background-color: rgba(0,0,0,.2);

`