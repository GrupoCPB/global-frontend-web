import { styled, Box } from "@material-ui/core";

export const StyledMetasCard = styled(Box)`
    border: solid 1px ${({ theme }) => theme.palette.grey['100']};
    flex-basis: 22%;
    display: flex;
    flex-direction: column;
    border-radius: 14px;
    overflow: hidden;

    .metas-card-div-1 {
        text-align: center;
        color: white;
        background: #352A30;

        h3 {
            font-size: 18px;
            margin: 10px 0 0;
        }

        p {
            font-size: 16px;
            font-weight: 300;
            margin: 5px 0 10px;
        }
        
        padding: 10px 0;
    }

    .metas-card-div-2 {
        padding: 10px 20px 0;

        h3 {
            font-size: 16px;
            margin: 5px 0 -5px;
        }

        p {
            font-size: 13px;
        }
    }

    .metas-card-div-3 {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 0 20px 10px;

        .metas-card-div-3-votos-span {
            border-radius: 14px;
            padding: 7px 13px;
            background: ${({theme}) => theme.palette.grey['100']};
            font-size: 13px;
            font-weight: 600;

        }

        button {
            color: #FB1393;
            font-weight: 700;
        }
    }
`;