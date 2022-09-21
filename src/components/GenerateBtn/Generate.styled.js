import styled from "styled-components";

export const GenerateBtnBox = styled.div`
    grid-row: 1 / 2;
    grid-column:  7 / -1;

    justify-self: end;
    align-self: center;
    align-items: center;

    button {
        cursor: pointer;
        color: #fff;
        background-color: #4e73df;
        border: 0;
        padding: .8rem 1.6rem;
        font-size: 1.4rem;
        border-radius: 3.2px;
        font-weight: 500;
        transition: all .2s ease-out;
        box-shadow: 0 .125rem .25rem 0 rgba(58,59,69,.2);
        display: flex;
        align-items: center;

        &:hover {
            background-color: #2e59d9;
        }

        svg {
            width: 1.4rem;
            height: 1.4rem;
            fill: rgba(255,255,255,.5);
            font-size: 1.4rem;
            margin: 0 4px 0 -4px;
        }
    }
`