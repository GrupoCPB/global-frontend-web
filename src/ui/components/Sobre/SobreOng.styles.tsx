import { experimentalStyled as styled } from '@material-ui/core/styles';
import { Button } from "@material-ui/core"

export const resetPagina = styled('div')`
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Merriweather', serif;
`;

export const SobreOngBody = styled('body')`
    background-color: ${({ theme }) => theme.palette.primary.dark};
    color: ${({ theme }) => theme.palette.grey[50]};
    display: flex;
`;

export const SobreOngContainer = styled('div')`
    padding: 0px 100px 50px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
`;

export const SobreOngContent = styled('div')`
    width: 50%;

    h2{
        font-weight: 300;
        font-size: 46px;
        line-height: 2em;
    }

    h3{
        font-weight: 300;
        font-size: 20px;
        line-height: 2em;
        margin-top: 30px;
    }

    p{
        font-weight: 300;
        font-size: 16px;
        line-height: 1.6em;
        text-align: left;
    }

    a{
        font-weight: 300;
        font-size: 14px;
        color: ${({ theme }) => theme.palette.grey[50]};
        margin-bottom: 40px;
        text-align: right;
    }
`;
    
export const SobreOngSegundoP = styled('p')`
    font-weight: 300;
    font-size: 16px;
    line-height: 1.6em;
    text-align: left;
    margin-bottom: 40px;
`;

export const SobreOngBtn = styled('div')`
    border-radius: 7px;
    border: none;
`;

export const SobreOngBtn2 = styled(Button)`
    margin-left: 15px;
`;

export const SobreOngImgContent = styled('div')`
    margin-top: auto;
    margin-bottom: auto;
    
    ${({ theme }) => theme.breakpoints.down('md')}{
        width: 100%;
    }
`;

export const SobreOngImgContentImg = styled('img')`
    width: 488px;
    height: 327px;
`;