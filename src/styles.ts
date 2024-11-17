import { createGlobalStyle } from 'styled-components'

export const colors = {
  gray: '#333333',
  black: '#111111',
  white: '#EEEEEE',
  green: '#10AC84',
  lightGray: '#A3A3A3'
}

export const breakpoints = {
  desktop: '1024px',
  tablet: '768px'
}

const GlobalCSS = createGlobalStyle`
*{
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  font-family: 'Roboto', sans-serif;
  list-style: none;
}

body{
  background-color: ${colors.black};
  color: ${colors.white} !important;
  padding-top: 24px;

  .container{
  max-width: 1024px;
  width: 100%;
  margin: 0 auto;

  @media (max-width:${breakpoints.desktop}){
    max-width: 80%;
  }
  }
}
`

export default GlobalCSS
