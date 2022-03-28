import { styled } from '@material-ui/core';

export const StyledDonationMainPageWrapper = styled('main')`
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