import { styled, Box } from "@material-ui/core";


export const StyledHomepageCard = styled(Box)`
    width: 43%;
    border-radius: 10px;
    padding: 30px;
    background: ${({ theme }) => theme.palette.grey['100']};
    display: flex;
    flex-direction: column;
    justify-content: space-between;

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
    }

    .grey-card-button {
        width: fit-content;
    }
`;