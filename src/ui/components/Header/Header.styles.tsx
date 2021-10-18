import { experimentalStyled as styled } from '@material-ui/core/styles';
import { AppBar } from '@material-ui/core';

export const HeaderAppBar = styled(AppBar)`
    flex-direction: row;
    align-items: center;
    background-color: ${({ theme }) => theme.palette.primary.dark};
    padding-left: 10px;
    height: 50px;
`;

export const HeaderLogo = styled('img')`
    height: 32px;
    margin-left: 55px;
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
    min-height: 35px;
    font-weight: 600;
    display: flex;
    align-items: center;
    padding: 6px 0;

    ul {
        padding: 0;
        margin: 0;
        list-style-type: none;
        display: flex;
        flex-direction: row;
        height: 100%;
        width: 100%;
        padding: 0 25px 0 50px;

        li {
            display: grid;
            place-items: center;
            flex-basis: 100%;
            white-space: pre;
        }
    }

    a{
        cursor: pointer;
    }

    ${({ theme }) => theme.breakpoints.down('md')}{
        font-size: 12px;
     }
`;

