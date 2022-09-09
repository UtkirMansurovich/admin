import styled from "styled-components";

export const Icons = styled.div`
    cursor: pointer;
    position: relative;

    svg {
        width: 2rem;
        height: 2rem;
        fill: rgb(161,162,172);
        transtion: all 1s ease-out;
        
        &:hover {
            fill: #858796;
        }
    }

    span {
        position: absolute;
        top: -8px;
        right: -8px;
        background-color: #e74a3b;
        color: #fff;
        padding: 2px;
        border-radius: 4px;
        line-height: 1;
        font-weight: 700;
    }
`
