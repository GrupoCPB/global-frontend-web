import {styled, Box} from '@material-ui/core';


export const StyledArea = styled(Box)`
    background: ${({theme}) => theme.palette.grey['50']};
    padding: 50px 10px;
    width: fit-content;
    display: flex;
    border-radius: 10px;

    button {
        color: white;
        margin: 0 20px;
    }

    .metas-button {
        background: ${({theme}) => theme.palette.success.main};

        &:hover {
            background: ${({theme}) => theme.palette.success.main} + '95';
        }
    }

    .doar-button {
        background: ${({theme}) => theme.palette.secondary.light} !important;
    }
`;