import styled from "styled-components";

export const InputDefault = styled.div`
    display: flex;
    flex-direction: column;
    width: 15rem;

    input{
        padding: 1rem;
        border-style: solid;
        border-color: #828282;
        border-radius: 10px;
        outline: none;
    }

    input:hover{
        border-color: #333333;
    }

    input:focus, input:active {
        border-color: #2962FF;
    }

    input:active + label{
        color: #2926FF;
    }
`