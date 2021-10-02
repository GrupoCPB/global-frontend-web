import { styled } from '@material-ui/core/styles';
import theme from '../../../ui/themes/theme';

const Wrapper = styled('div')`
    background: ${theme.palette.primary.dark};
    height: 200px;
    display: flex;
    align-content: center;
    justify-content: space-between;
    align-items: center;

    h1 {
        color: #F7F7F7;
        font-family: Merriweather;
        margin: 0 125px;
        letter-spacing: 1px;
    }

    img {
        transform: scale(0.9);
        position: relative;
        margin: 0 80px;
        top: 10px;
    }

`

export default function TopBanner({titulo}) {
    return(
        <Wrapper>

                <h1>{titulo}</h1>



                <img src='/img/causas/girl-icon.png'></img>

        </Wrapper>
    )
}
