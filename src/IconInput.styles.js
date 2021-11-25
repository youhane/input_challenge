import styled from "styled-components";

export const IconInput = styled.div`
    div{
        display: flex;
        border: 2px solid #828282;
        border-radius: 10px;
        padding-left: 1rem;
        width: 11rem;
    }

    input{
        border: none;
        padding: ${props => props.iconStart ? "1rem 1rem" : "1rem 0rem"};
        margin: 0;
        width: ${props => props.iconStart ? "5rem" : "9rem"};
    }
`