import { experimentalStyled as styled } from '@material-ui/core/styles';
import { AppBar } from '@material-ui/core';

export const HeaderAppBar = styled(AppBar)`
    flex-direction: row;
    align-items: center;
    background-color: ${({ theme }) => theme.palette.primary.dark};
    padding-left: 10px;
    height: 50px;
`;

export const InputBusca = styled('input')`
    min-width: 300px;
    background: #F0F5F7;
    border: 0.8px solid #3D98C4;
    box-sizing: border-box;
    font-size: 15px;
    font-weight: 200;
    border-radius: 25px;
    height: 40px;
    &:focus {
        color: #495057;
    background-color: #fff;
    border-color: #80bdff;
    outline: 0;
    box-shadow: 0 0 0 0.2rem rgb(0 123 255 / 25%);
    }

    ${({ theme }) => theme.breakpoints.down('md')}{
        width: 100%;
     }
`;

export const HeaderLogo = styled('img')`
    height: 32px;
    padding-right: 10px;
`;

export const SocialMedias = styled('div')`
    height: 32px;
    padding-right: 10px;
    position: absolute;
    right: 10px;
    

    a{
       padding-left: 10px;
    }

     ${({ theme }) => theme.breakpoints.down('md')}{
        visibility: hidden;
     }

`;

export const SecondaryAppBar = styled(AppBar)`
    background-color: ${({ theme }) => theme.palette.background.paper};
    color: ${({ theme }) => theme.palette.primary.dark};
    font-family: 'Open Sans', sans-serif;
    flex-direction: row;
    height: 35px;
    font-weight: 600;
    display: flex;
    align-items: center;
    justify-content: flex-end;

    a{
        padding-right: 25px;
        cursor: pointer;
    }

    ${({ theme }) => theme.breakpoints.down('md')}{
        font-size: 12px;
        justify-content: center;
     }
`;

