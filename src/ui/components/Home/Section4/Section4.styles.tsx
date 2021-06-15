import { experimentalStyled as styled } from '@material-ui/core/styles';
import { Button, Container } from '@material-ui/core'

export const BodySection = styled('div')`
    background-color:  ${({ theme }) => theme.palette.background.paper};
    width: 100%;
`;


export const ContainerSction = styled(Container)`
    padding-top: 55px;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    flex-wrap: wrap;
    padding-bottom: 55px;
`;

export const Apresentacao = styled('div')`
    font-family: 'Merriweather';
    width: 50%;
    text-align: center;

    h1 {
    font-style: normal;
    font-weight: 400;
    font-size: 46px;
    line-height: 58px;
    }

  

    p {
        font-style: normal;
        font-weight: normal;
        font-size: 20px;
        line-height: 31PX;
         font-weight: 400;
    }


`;


export const Cadastros = styled(Container)`
    flex-direction: row;
    padding-top: 55px;
`;

export const ButtonCadastro = styled(Button)`
    
    background-color:  ${({ theme }) => theme.palette.primary.dark};
    font-family: Open Sans;
    font-style: normal;
    font-weight: 600;
    width: 222px;
    box-shadow: 0px 3.43084px 12.008px rgba(0, 0, 0, 0.2);
    border-radius: 6.86169px;
    margin-right: 17px;
    margin-top: 20px ;

   
`;