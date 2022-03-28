import { styled } from '@material-ui/core';

export const StyledLogo = styled('div')`  
    transform-origin: 0;

    &.small {
        transform: scale(0.7);
        font-size: 25px;
        bottom: 10px;
    }

    &.big {
        transform: scale(1.5);
    }
`;
