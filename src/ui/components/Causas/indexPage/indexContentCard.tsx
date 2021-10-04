import { styled } from '@material-ui/core/styles';
import Link from 'next/link';
import theme from '../../../themes/theme';

const Wrapper = styled('div')`
    display: grid;
    grid-template-rows: 80% 20%;
    row-gap: 15px;
    margin-top: 15px;
    width: auto;
    height: 250px;
    margin: 20px 10px;
    cursor: pointer;

    img {
        border-top-left-radius: 15px;
        border-top-right-radius: 15px;
    }

    span {
        background: ${theme.palette.primary.dark};
        text-align: center;
        font-family: Merriweather;
        display: grid;
        place-items: center;
        height: 25px;
        
        p {
            font-size: 18px;
            margin: 0;
            padding: 0;
            color: white;
        }
    }
`

export default function Card({src, leg, routeName}) {
    return(
        <Wrapper>
            <Link href={`/causas/${routeName}`}>
                <img src={src} />
            </Link>
            <span><p>{leg}</p></span>
        </Wrapper>
    )
}