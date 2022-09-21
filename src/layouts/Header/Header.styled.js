import styled from 'styled-components';

export const HeaderSection = styled.div`
    grid-row: 2 / 3;
    grid-column: full-start / full-end;

    display: grid;
    grid-template-rows: repeat(2, min-content) 40rem repeat(5, min-content);
    grid-template-columns: repeat(12, 1fr);
    grid-gap: 2.4rem;
    padding: 2.4rem;
`;
