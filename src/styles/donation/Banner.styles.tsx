import { styled, Container } from '@material-ui/core';

export const StyledBannerWrapper = styled(Container)`
    background: linear-gradient(311.76deg, #D4E7FE -15.24%, #FFFFFF 78.85%);

    .banner-text-div {
        h1 {
            font-size: 50px;
        }

        @media(max-width: 1200px) {
            margin-top: 50px;
            h1 {
                font-size: 30px;
            }
        }
    }

    h1 {
        font-size: 18px;
        padding-right: 70px;
        margin: 0
    }

    p {
        margin: 30px 0;
        font-weight: 500;
        color: #746771
    }

    @media (max-width: 1200px) {
        h1, p {
            text-align: center;
            padding: 0;
        }

        button {
            display: block;
            margin-inline: auto;
        }

        img {
            display: block;
            width: 50%;
            margin-inline: auto;

            @media(max-width: 550px) {
                visibility: hidden;
                height: 50px;
            }
        }
    }
`;