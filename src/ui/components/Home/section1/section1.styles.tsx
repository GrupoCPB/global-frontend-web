import { experimentalStyled as styled } from '@material-ui/core/styles';

export const BodySection = styled('div')`
    height: 755px;
    background-color: ${({ theme }) => theme.palette.primary.dark};
    position: absolute;
    color: white;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 50px;
`;