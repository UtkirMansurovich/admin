import styled from 'styled-components';

export const NavbarSection = styled.div`
    background-color: #fff;
    grid-row: 1 / 2;
    grid-column: full-start / full-end;

    display: grid;
    grid-template-columns: minmax(10rem, 1fr) repeat(2, min-content) max-content;
    grid-column-gap: 4rem;
    align-items: center;
    padding: .8rem 3rem;
    box-shadow: 0 .15rem 1.75rem 0 rgba(58,59,69,.15);
`;