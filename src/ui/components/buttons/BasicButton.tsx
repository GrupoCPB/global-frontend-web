import { Button, styled } from '@material-ui/core';
import { MouseEventHandler, ReactElement } from 'react';

type ButtonProps = {
    variant: 'outlined' | 'contained' | 'text',
    text: String,
    className?: string,
    clickHandler?: MouseEventHandler<HTMLButtonElement>,
    anyEndIcon?: ReactElement,
    anyStartIcon?: ReactElement
}

const StyledButton = styled(Button)(({ theme }) => ({
    borderColor: `${theme.palette.secondary.light}`,
    color: `${theme.palette.secondary.light}`,

    '&:hover': {
        background: `${theme.palette.secondary.light}10`,
        borderColor: `${theme.palette.secondary.light}`,
    },

    '.MuiTouchRipple-child': {
        background: `${theme.palette.secondary.light}`,
    },

    '&.variant-contained': {
        background: `${theme.palette.secondary.light}`,
        color: 'white',
        fontWeight: '500'
    }
}))

export default function BasicButton({ variant, text, className, clickHandler, anyEndIcon, anyStartIcon }: ButtonProps) {
    return (
        <>
            <StyledButton
                onClick={clickHandler || (() => { })}
                className={className ? className : ''}
                variant={variant}
                endIcon={anyEndIcon}
                startIcon={anyStartIcon}
            >
                {text}
            </StyledButton>
        </>
    );
}