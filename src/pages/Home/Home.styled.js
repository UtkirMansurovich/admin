import styled from 'styled-components';

export const HomeContainer = styled.div`
    display: grid;
    grid-template-rows: 7rem minmax(calc(100vh - 7rem), min-content) min-content;
    grid-template-columns: [sidebar-start] 14rem [sidebar-end full-start] minmax(6rem, 1fr) [center-start] repeat(8, [col-start] minmax(min-content, 14rem ) [col-end] ) [center-end] minmax(6rem, 1fr) [full-end];
`;