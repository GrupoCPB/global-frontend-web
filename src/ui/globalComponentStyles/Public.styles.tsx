import { experimentalStyled as styled } from '@material-ui/core/styles';

export const ImgApresentation = styled('img')`
     ${({ theme }) => theme.breakpoints.down('md')}{
        width: 350px;
        padding-top: 15px;
     }
`;

export const Apresentacao = styled('div')`
    font-family: 'Merriweather';
    width: 50%;

    h1 {
    font-style: normal;
    font-weight: normal;
    font-size: 46px;
    line-height: 58px;
    }

    a {
        color: white;
    }

    p {
        font-style: normal;
        font-weight: normal;
        font-size: 18.0119px;
        line-height: 150%;
    }

    h2 {
        font-style: normal;
        font-weight: bold;
        font-size: 20.5851px;
        line-height: 26px;
    }

    ${({ theme }) => theme.breakpoints.down('md')}{
        width: 100%;
     }

`;