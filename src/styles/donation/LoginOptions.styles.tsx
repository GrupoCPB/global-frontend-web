import { styled } from '@material-ui/core';

export const StyledLoginOptions = styled('div')`
    border-radius: 10px;
    background-color: ${({ theme }) => theme.palette.grey[50]};
    position: absolute;
    width: auto;
    overflow: hidden;
    bottom: -200%;
    left: -35%;
    transition: transform 0.2s linear;
    transform-origin: top;

    &.closed {
        transform: scale(1, 0);
    }

    &.open {
        transform: scale(1, 1);
    }
    
    ul {
        display: flex;
        flex-direction: column;
        font-size: 15px;
        padding: 0;
        margin: 0;



        li {
            width: max-content;
            padding: 10px 30px 10px 20px;
            width: 100%;
            cursor: pointer;

            &:hover {
                background-color: ${({ theme }) => theme.palette.secondary.main};
                color: white;
            }
        }
    }
`
