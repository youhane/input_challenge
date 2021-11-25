import styled from "styled-components";

export const InputDefault = styled.div`
    input{
        border-color: #828282;
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