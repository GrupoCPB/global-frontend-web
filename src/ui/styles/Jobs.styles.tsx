import { experimentalStyled as styled } from '@material-ui/core/styles';
import { AppBar, TextField } from '@material-ui/core';

export const Container = styled('section')`
    min-height:100vh;
    width:100vw;

    display:flex;
    flex-direction:column;
    align-items:center;
    margin:1rem 0;
    padding:1rem 0;
    
    background-color: ${({ theme }) => theme.palette.primary.light};
`;

export const JobsArea = styled('div')`
    margin:1rem 0;

`;