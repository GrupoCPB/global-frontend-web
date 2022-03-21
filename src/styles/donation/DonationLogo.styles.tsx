import { styled } from '@material-ui/core';

export const StyledLogo = styled('div')`       
    display: flex;
    flex-direction: row;
    width: fit-content;
    align-items: center;
    position: relative;
    transform-origin: 0;
   
    img {
        margin-right: 20px;
    }

    &.small {
        transform: scale(0.7);
        font-size: 25px;
        bottom: 10px;
    }

    &.big {
        transform: scale(1.5);
    }
`;
