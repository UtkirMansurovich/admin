import styled from "styled-components";

export const RevenueChartBox = styled.div`
    grid-row: 3 / 4;
    grid-column: 9 / -1;

    box-shadow: 0 .15rem 1.75rem 0 rgba(58,59,69,.15);
    border-radius: 0.56rem;
    
    div {
        padding: 1.6rem 2rem;
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        align-items: center;
        border-bottom: 1px solid #e3e6f0;
        
        h6 {
            font-size: 1.6rem;
            font-weight: 700;
            color: #4e73df;
        }

        hr {
            width: 10px;
            height: 100%;
            border: none;
            border-right: 4px dotted #e3e6f0;
            cursor: pointer;
            justify-self: end;
        }
    }
`
