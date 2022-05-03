import { styled } from '@material-ui/core';

export const StyledLogo = styled('div')`  
    width: fit-content;
    margin-inline: auto;
    place-self: center;

    &.small {
        transform: scale(0.7);
    }   

    &.big {
        transform: scale(1.5);
    }

    img {
        min-width: 150px;
        width: 90%;
    }
`;
