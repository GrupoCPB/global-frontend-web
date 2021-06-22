import { experimentalStyled as styled } from '@material-ui/core/styles';
import { Card, Container } from '@material-ui/core';

export const JobsInfos = styled('div')`
    display: flex;
    flex-direction: row;
    padding-top: 20px;
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
   height: 954px;
`;