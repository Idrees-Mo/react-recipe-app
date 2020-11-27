import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`

@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700&family=Rubik:wght@500;700;900&display=swap');

body {
  box-sizing: border-box;
  margin: 0;
  line-height: 1.5;
  font-size:16px ;
  font-family: 'Montserrat', sans-serif;
  font-weight: 400;
  background-color:${({ theme: { colors } }) => colors.light};
   color:#000;
   background-color:#fff;
   }


* {
  margin: 0;
  padding:0;
  box-sizing: border-box;
  outline: none;
  text-decoration: none;
  list-style:none;
  }

  ::before, ::after{
    box-sizing: border-box;
  }
  
`