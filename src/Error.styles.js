import styled from "styled-components";

export const Error = styled.div`
    display: flex;
    flex-direction: column;
    width: 15rem;

    input{
        padding: 1rem;
        border-style: solid;
        border-color: red;
        border-radius: 10px;
        outline: none;
    }

    input:hover{
        border-color: #333333;
    }

    input:hover + label{
        color: #333333 !important;
    }

    label{
        color: red;
    }
`