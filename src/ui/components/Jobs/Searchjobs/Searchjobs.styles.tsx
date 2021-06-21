import { experimentalStyled as styled } from '@material-ui/core/styles';
import { AppBar, TextField, Card, Container } from '@material-ui/core';

export const BodySearch = styled('div')`
    background-color: ${({ theme }) => theme.palette.primary.light};
    width: 100%;

`;

export const ContainerSearch = styled(Container)`
    padding-top: 55px;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    padding-bottom: 55px;
`;

export const BodyCard = styled(Card)`
   background-color: ${({ theme }) => theme.palette.primary.dark};
   width: 100%;
   padding: 15px;
`;