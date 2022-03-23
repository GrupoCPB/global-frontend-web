import { Box, styled } from '@material-ui/core';

const StyledBox = styled(Box)`
    flex-basis: 17%;
    height: 190px;
    display: grid;
    place-items: center;
    border-radius: 14px;
    background: white;

    img {
        width: auto;
    }
`

export default function EmpresaIcon({ imgSrc }) {
    return (
        <StyledBox>
            <img src={imgSrc} alt='empresa' />
        </StyledBox>
    )
}