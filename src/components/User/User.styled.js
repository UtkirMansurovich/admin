import styled from "styled-components";

export const UserBox = styled.div`
    display: grid;
    grid-template-columns: repeat(3, max-content);
    grid-column-gap: 2px;
    align-items: center;
    justify-items: end;
    cursor: pointer;
    transition: all 1s ease-out;

    &::before {
        content: "";
        height: 70%;
        width: 1px;
        display: block;
        background-color: rgb(161,162,172);
        margin-right: 3rem;
        border-radius: 100px;
    }

    img {
        width: 4.5rem;
        height: 4.5rem;
        border-radius: 50%;
        object-fit: cover;
        object-position: top;
    }

    h4 {
        color: rgb(161,162,172);
        font-size: 1.4rem;
        font-weight: normal;
    }

    &:hover h4 {
        color: #858796;
    }

`
