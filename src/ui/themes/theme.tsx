import { createTheme } from '@material-ui/core';

const theme = createTheme({
    palette: {
        primary: {
            light: '#3D98C4',
            main: '#1F8EC4',
            dark: '#11709E',
        },
        secondary: {
            light: '#FB1393',
            main: '#7A0E48',
            dark: '#520B31',
        },
        text: {
            primary: '#262626',
            secondary: '#404040',
        },
        error: {
            main: '#FC3C00',
        },
        warning: {
            main: '#FCA600',
        },
        success: {
            main: '#00D34D',
        },
        grey: {
            50: '#FAFAFA',
            100: '#F0F0F0',
            200: '#D7D9DD',
            300: '#C4C4C4',
            400: '#9B9B9B',
        }
    },
    typography: {
        fontFamily: 'Open Sans',
    },
    shape: {
        borderRadius: 3,
    },
    components: {
        MuiButton: {
            styleOverrides: {
                root: {
                    textTransform: 'none',
                },
            },
            variants: [
                {
                    props: { variant: 'contained', color: 'secondary' },
                    style: {
                        color: 'white',
                    },
                },
            ],
        },
        MuiPaper: {
            styleOverrides: {
                root: {
                    boxShadow: '0px 0px 39px rgba(0, 0, 0, 0.05)',
                },
            },
        },
    },
});

export default theme;