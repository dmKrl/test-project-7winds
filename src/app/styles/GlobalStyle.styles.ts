import { baseTheme } from 'shared/styles/theme';
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'Roboto';
    src: local('Roboto'), url('../../shared/assets/fonts/Roboto.ttf') format('truetype'); 
    font-weight: 400;
    font-style: normal;
  }

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box
}
*:before,
*:after {
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
}
a,
a:visited {
    text-decoration: none;
    cursor: pointer;
}
button {
    cursor: pointer;
}

ul li {
    list-style: none;
}


html,
body {
    width: 100%;
    height: 100%;
    color: white;
    background-color: ${baseTheme.colors.bg};
    font-family: 'Roboto';
}

`;

export default GlobalStyle;
