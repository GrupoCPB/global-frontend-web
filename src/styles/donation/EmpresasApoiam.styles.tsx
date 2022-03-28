import { Container, styled } from '@material-ui/core';

export const StyledContainer = styled('div')`
    background: ${({ theme }) => theme.palette.grey['100']};
    padding-bottom: 100px;
    padding-top: 100px;

    .inner-container {
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;

        h1 {
            width: 100%;
            text-align: center;
            margin: 0 auto 30px;
        }
    }
`

