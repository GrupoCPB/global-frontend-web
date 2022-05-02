import { styled, Box } from "@material-ui/core";


export const StyledHomepageCard = styled(Box)`
    width: 90%;
    border-radius: 10px;
    padding: 5%;
    background: ${({ theme }) => theme.palette.grey['100']};

    .gray-card-top {
        display: flex;
        width: 100%;
        align-items: center;

        h2 {
            margin: 0 0 0 15px;

            &.empresa {
                color: ${({ theme }) => theme.palette.primary.main};
            }

            &.consumidor {
                color: ${({ theme }) => theme.palette.secondary.main};
            }
        }

    }

    .grey-card-content {
        margin: 30px 0;
        min-height: 120px;
    }

    .grey-card-button {
        width: fit-content;

        @media (max-width: 1200px) {
            display: block;
            width: 95%;
            margin-inline: auto;
        }
    }
`;