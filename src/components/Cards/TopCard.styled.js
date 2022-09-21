import styled from "styled-components";

export const TopCardBox = styled.div`
    grid-row: 2 / 3;
    grid-column: 1 / -1;
    
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(14rem, 1fr));
    grid-gap: 2.4rem;

    div {

        display: grid;
        grid-template-columns: 1fr min-content;
        background-color: #fff;
        box-shadow: 0 .15rem 1.75rem 0 rgba(58,59,69,.15);
        border: 1px solid #e3e6f0;
        border-radius: .56rem;
        padding: 2rem 2.8rem;
        align

        &:nth-child(1) {
            border-left: .5rem solid #4e73df;
            
            h6 {
                color: #4e73df;
            }
        }

        &:nth-child(2) {
            border-left: .5rem solid #1cc88a;

            h6 {
                color: #1cc88a;
            }
        }

        &:nth-child(3) {
            border-left: .5rem solid #36b9cc;

            h6 {
                color: #36b9cc;
            }
        }

        &:nth-child(4) {
            border-left: .5rem solid #f6c23e;

            h6 {
                color: #f6c23e;
            }
        }
        
        h6 {
            grid-row: 1 / 2;
            grid-column: 1 / 2;

            font-size: 1.2rem;
            font-weight: 700;
        }

        h4 {
            grid-row: 2 / 3;
            grid-column: 1 / 2;
            font-size: 2rem;
        }

        svg {
            grid-row: 1 / 3;
            grid-column: 2 / -1;
            width:3.2rem;
            height: 3.2rem;
            fill: #dddfeb;
            align-self: center;
        }
    }
`