import { experimentalStyled as styled } from '@material-ui/core/styles';
import { Button, Container } from '@material-ui/core';

export const BodySection = styled('div')`
    background-color: ${({ theme }) => theme.palette.primary.dark};
    color: ${({ theme }) => theme.palette.grey[50]};
    width: 100%;
    padding-bottom: 170px;
    font-family: 'Merriweather', serif;
`;

export const ContainerSection = styled(Container)`
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    padding-bottom: 4rem;
    padding-top: 2rem;
`;

export const ButtonCadastro = styled(Button)`
    background-color: ${({ theme }) => theme.palette.background.paper};
    color: black;
    font-family: Open Sans;
    font-weight: 600;
    width: 222px;
    box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.2);
    border-radius: 7px;
    margin-right: 17px;
    margin-top: 20px ;

    &:hover{
        background-color:  ${({ theme }) => theme.palette.grey[400]};;
    }

    ${({ theme }) => theme.breakpoints.down('md')}{
        width: 100%;
     }
`;
