import styled from "styled-components";

export const ErrorInput = styled.div`
    input{
        border-color: red;
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