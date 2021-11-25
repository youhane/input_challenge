import styled from "styled-components";

export const InputDefault = styled.div`
    input, textarea{
        border-color: #828282;
        width: ${props => props.fullWidth ? '95vw' : 'auto'};
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

    textarea{
        resize: none;
    }
`