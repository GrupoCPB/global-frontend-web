import { Box, styled } from '@material-ui/core';

export const StyledBox = styled(Box)`
    flex-basis: 17%;
    height: 190px;
    display: grid;
    place-items: center;
    border-radius: 14px;
    background: white;
    position: relative;

    img {
        width: auto;
    }

    .overlay {
        position: absolute;
        width: 100%;
        height: 100%;
        border-radius: 14px;
        transform: scale(0);
        filter: opacity(0);
        transition: transform 0.3s ease-out, filter 0.3s ease;

        button {
            width: 100%;
            border-radius: 14px;
            border: none;
            height: 100%;
            background: ${({theme}) => theme.palette.secondary.light};

            span {
                background: white;
                color: ${({theme}) => theme.palette.secondary.light};
                border-radius: 7px;
                font-weight: 700;
                padding: 10px 20px;
            }
        }
    }

    &:hover > .overlay {
        transform: scale(1);
        filter: opacity(1);
        
    }

`
