import styled from 'styled-components';

export const SearchBox = styled.div`

    form {
        max-width: 40rem;
        display: grid;
        grid-template-rows: 3.8rem;
        grid-template-columns: minmax(14rem, 1fr) 3.8rem;

        
        input {
            border-radius: 10px 0 0 10px;  
            outline: none;
            border: 0;
            padding: .6rem 1.2rem;
            background-color: #f8f9fc;
            
            &::placeholder {
                color: grey;
                font-size: 1.2rem;
            }

            &:focus {
                box-shadow: 0 0 3px 3px rgba(78,115,223, 0.5);
            }
        }

        button {
            background-color: #4e73df;
            border: 0;
            border-radius: 0 10px 10px 0;
            padding: 0.6rem 1.2rem;
            cursor: pointer;

            &:focus {
                box-shadow: 0 0 3px 3px rgba(78,115,223, 0.5);
            }

            svg {
                fill: #fff;
                width: 1.4rem;
                height: 1.4rem;
            }
        }
    }
`