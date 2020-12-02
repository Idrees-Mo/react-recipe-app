import styled from 'styled-components'

export const Container = styled.div`
position:fixed;
top:0;
left:0;
background-color:rgba(0,0,0,0.7);
display:flex;
justify-content:center;
align-items:center;
z-index:2000;
min-height:100vh;
width:100%;
`
export const Spiner = styled.div`
  border: 5px solid #111;
  border-radius: 50%;
  border-top: 5px solid orange;
  width: 50px;
  height:50px;
  -webkit-animation: spin 0.5s linear infinite; /* Safari */
  animation: spin 0.5s linear infinite;
  @-webkit-keyframes spin {
    0% { -webkit-transform: rotate(0deg); }
    100% { -webkit-transform: rotate(360deg); }
  }
  
  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
  `