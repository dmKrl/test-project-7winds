import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
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
    font-family: 'StratosSkyeng', sans-serif;
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
    background-color: #202124;
}

`;

export default GlobalStyle;
