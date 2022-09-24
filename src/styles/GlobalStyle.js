import {createGlobalStyle} from "styled-components"
const GlobalStyles = createGlobalStyle`

*, *::before, *::after{
    margin: 0;
    padding:0;
}

body{
    overflow-x: hidden;
    font-family: 'Barlow Semi Condensed', sans-serif;
    font-size: 25px;
}

h1,h2,h3,h4,h5,h6{
    margin: 0;
    padding:0;
}

a{
    color: inherit;
    text-decoration: none;
}

`

export default GlobalStyles