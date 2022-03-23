import { styled } from '@material-ui/core';

export const StyledDonationMainPageWrapper = styled('main')`
    .banner-section {
        display: grid;
        grid-template-columns: 1fr 1fr;
        place-items: center;
        background: linear-gradient(311.76deg, #D4E7FE -15.24%, #FFFFFF 78.85%);

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

    }
    
    .empresaOuConsumidor-section {
        display: flex;
        justify-content: space-between;
        margin-top: 50px;
        margin-bottom: 50px;
    }

    .metasEmDestaque-section {
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;

        margin-bottom: 100px;

        h1 {
            flex-basis: 100%;
            text-align: center;
        }
    }
`