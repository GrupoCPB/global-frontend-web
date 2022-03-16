import { Button, styled } from '@material-ui/core';
import { MouseEventHandler } from 'react';

type ButtonProps = {
    variant: 'outlined' | 'contained',
    text: String,
    className?: string,
    clickHandler?: MouseEventHandler<HTMLButtonElement>
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

export default function BasicButton({ variant, text, className, clickHandler }: ButtonProps) {
    return (
        <>
            <StyledButton onClick={clickHandler || (() => {})} className={className ? className : ''} variant={variant}>{text}</StyledButton>
        </>
    );
}