import { styled } from '@material-ui/core';

export const SelectStyled = styled('label')`
    display: flex;
    flex-direction: column;
    margin-top: 15px;

    span {
        margin-bottom: 4px;
        font-weight: 600;
    }

    select {
        border-radius: 6px;
        border solid 1px black;
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
        1px solid #000000;
        padding: 5px 3px;
        font-size: 1.1rem; 
    }
`;