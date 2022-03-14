import { Button, styled } from '@material-ui/core';

type ButtonProps = {
    variant: 'outlined' | 'contained',
    text: String,
    className?: string
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

}))

export default function BasicButton({ variant, text, className }: ButtonProps) {
    return (
        <>
            <StyledButton className={className ? className : ''} variant={variant}>{text}</StyledButton>
        </>
    );
}