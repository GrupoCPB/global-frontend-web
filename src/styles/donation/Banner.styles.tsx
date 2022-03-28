import { styled, Container } from '@material-ui/core';

export const StyledBanner = styled(Container)`
    display: grid;
    grid-template-columns: 1fr 1fr;
    place-items: center;

    & div:first-of-type {
        padding: 50px 20px 50px 75px;

        & h1 {
            font-size: 3vw;
            padding-right: 70px;
            margin: 0
        }

        & p {
            margin: 30px 0;
            font-weight: 500;
            color: #746771
        }
    }
`

export const StyledBannerWrapper = styled('div')`
    background: linear-gradient(311.76deg, #D4E7FE -15.24%, #FFFFFF 78.85%);
`;