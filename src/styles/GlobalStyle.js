import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    *{
        padding: 0;
        margin: 0;
        box-sizing: border-box;
        font-family: 'Josefin Sans', sans-serif;  
    }

    html{
        scroll-behavior: smooth;
    }

    body{
    background: rgb(0,0,0);
    background: linear-gradient(29deg, rgba(0,0,0,1) 0%, rgba(3,32,42,1) 100%);
	background-size: 400% 400%;
	animation: gradient 15s ease infinite;
	min-height: 100vh;
    height: 100%;
    }

    @keyframes gradient {
	0% {
		background-position: 0% 50%;
	}
	50% {
		background-position: 100% 50%;
	}
	100% {
		background-position: 0% 50%;
	}
}
`;

export default GlobalStyle;
