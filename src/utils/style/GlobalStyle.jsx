import { createGlobalStyle } from "styled-components"

const StyledGlobalStyle = createGlobalStyle`
    html {
        font-family: 'Josefin Sans', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
    }
    body {
        margin: 0;
    }
    #root {
        margin: 0;
        display: flex;
        flex-direction: column;
        min-height: 100vh;
        position: relative;
    }
`

export default StyledGlobalStyle