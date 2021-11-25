import styled from "styled-components";

export const InputSize = styled.div`
    input{
        border-color: #828282;
        padding: ${props => props.iconStart === "sm" ? "1rem 1rem" : "1rem 0rem"};
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

    span{
        font-size: .8rem;
    }
`