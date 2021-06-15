import { experimentalStyled as styled } from '@material-ui/core/styles';
import { Button, Container } from '@material-ui/core'

export const BodySection = styled('div')`
    background-color: ${({ theme }) => theme.palette.primary.dark};
    width: 100%;
`;

export const ContainerSction = styled(Container)`
    color: white;
    padding-top: 55px;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    flex-wrap: wrap;
    padding-bottom: 55px;
`;




export const Cadastros = styled(Container)`
    flex-direction: row;
    padding-top: 55px;
`;

export const ButtonCadastro = styled(Button)`
    background-color: ${({ theme }) => theme.palette.background.paper};
    color: black;
    font-family: Open Sans;
    font-style: normal;
    font-weight: 600;
    width: 222px;
    box-shadow: 0px 3.43084px 12.008px rgba(0, 0, 0, 0.2);
    border-radius: 6.86169px;
    margin-right: 17px;
    margin-top: 20px ;

    &:hover{
        background-color:  ${({ theme }) => theme.palette.grey[400]};;
    }

    ${({ theme }) => theme.breakpoints.down('md')}{
        width: 100%;
     }
`;


