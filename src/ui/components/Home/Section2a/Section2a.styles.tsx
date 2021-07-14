import { experimentalStyled as styled } from '@material-ui/core/styles';
import { Button, Container } from '@material-ui/core';

export const BodySection = styled('div')`
  background-color: ${({ theme }) => theme.palette.background.paper};
  width: 100%;
`;

export const ContainerSction = styled(Container)`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
    top: -105px;
    align-content: center;
    position: relative;
`;

export const Cadastros = styled(Container)`
  flex-direction: row;
  padding-top: 55px;
`;

export const ButtonCadastro = styled(Button)`
  background-color: ${({ theme }) => theme.palette.primary.dark};
  font-family: Open Sans;
  font-style: normal;
  font-weight: 600;
  width: 222px;
  box-shadow: 0px 3.43084px 12.008px rgba(0, 0, 0, 0.2);
  border-radius: 6.86169px;
  margin-right: 17px;
  margin-top: 20px;

  ${({ theme }) => theme.breakpoints.down('md')} {
    width: 100%;
  }
`;

export const GroupCard = styled(Container)`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
   flex-wrap: wrap;

   ${({ theme }) => theme.breakpoints.down('sm')} {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    flex-wrap: nowrap;
    overflow-x: scroll;
  }
`;

export const ContainerFloat = styled(Container)`
  top: -180px;
  position: relative;
 

  h1 {
    color: white;
    font-family: Open Sans;
    font-style: normal;
    font-weight: bold;
    font-size: 36px;
    text-align: center;
  }

   ${({ theme }) => theme.breakpoints.down('sm')} {
     h1 {
    font-size: 18px;
     }
  }
`;
