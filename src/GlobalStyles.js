import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`

body {
  box-sizing: border-box;
  margin: 0;
  line-height: 1.5;
  font-size:16px ;
  font-family: 'Roboto Slab', sans-serif;
  letter-spacing:2px;
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