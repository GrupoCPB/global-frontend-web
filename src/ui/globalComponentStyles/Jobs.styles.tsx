import { experimentalStyled as styled } from '@material-ui/core/styles';

export const Container = styled('section')`
    height:auto;
    width:100%;

    display:flex;
    flex-direction:column;
    align-items:center;
    
    background-color: ${({ theme }) => theme.palette.primary.light};
`;
