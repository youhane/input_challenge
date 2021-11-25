import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
        *{
                font-family: Poppins;
                font-style: normal;
                font-weight: 500;
                transition: all .2s;
                color: #333333;
        }
        div{
                display: flex;
                flex-direction: column;
                width: 15rem;
        }
        input{
                padding: 1rem;
                border-style: solid;
                border-radius: 10px;
                outline: none;
        }
`