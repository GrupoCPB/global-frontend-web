import { styled } from "@material-ui/core";

export const StyledMainRelatorioWrapper = styled('main')(({ theme }) => ({
    '.site-navigation-area': {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: '20px',
        marginBottom: '60px',

        '.navigation-path-div': {
            width: 'max-content',
            display: 'grid',
            gridTemplateColumns: 'auto auto auto',
            placeItems: 'center',
            columnGap: '15px'
        }
    },

    '.relatorio-section-1': {
        background: `${theme.palette.grey['100']}`,
    },

    '.options-section': {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between'
    },

    '.options-text-div': {
        'a': {
            textDecoration: 'none',
            color: `${theme.palette.secondary.light}`,
            fontWeight: '600'
        },

        'p': {
            marginTop: '50px',

            '&:last-of-type': {
                marginTop: '30px'
            }
        }
    },

    '.relatorio-section-2': {
        marginBottom: '100px',

        '.relatorio-section-2-first-box': {
            display: 'flex',
            alignItems: 'center',
            margin: '20px 0 10px',

            '.checkboxes-box': {
                marginLeft: '40px'
            },

            '.PDF-button-box': {
                flexGrow: '4',
                display: 'flex',
                justifyContent: 'flex-end'
            },

            '.gerarPDF': {
                color: 'black',
                borderColor: 'black',

                '&:hover': {
                    background: 'rgba(0,0,0,0.1)'
                },

                '.MuiTouchRipple-ripple': {
                    background: 'rgba(0,0,0,0.2)'
                }
            }
        },

        '.relatorio-section-2-second-box': {
            display: 'flex',
            alignItems: 'center',

            '.relatorio-section-2-data-inicial-div, .relatorio-section-2-data-final-div': {
                display: 'flex',
                alignItems: 'center'
            },

            'span': {
                fontSize: '16px',
                fontWeight: '700',
                display: 'grid',
                placeItems: 'center',
                margin: '0 40px 0 20px'
            },

            '.p-div': {
                fontSize: '16px',
                fontWeight: '600',
                flexGrow: '4',
                display: 'grid',

                'p': {
                    width: '60%',
                    justifySelf: 'end'
                }
            }
        },

        // '.relatorio-section-2-third-box': {
        //     'table': {
        //         width: '100%',
        //         borderSpacing: '0',

        //         'td': {
        //             borderBottom: 'solid 1px #00000013',
        //             padding: '10px 0',

        //             '&:first-of-type': {
        //                 fontWeight: '600'
        //             }
        //         },

        //         'tr': {
        //             width: '100%',

        //             '&:last-of-type': {
        //                 'td': {
        //                     border: 'none'
        //                 }
        //             }
        //         },

        //         '.table-value': {
        //             width: '80%',
        //             color: 'green',
        //             fontWeight: '600',

        //             '&.negative': {
        //                 'span': {
        //                     color: 'red'
        //                 }
        //             }
        //         }
        //     }
        // }
    },

    '.relatorio-section-3': {
        display: 'grid',
        marginBottom: '100px'
    },

    '.mais-doacoes': {
        placeSelf: 'center',
        width: 'max-content',
        fontWeight: '600',
        color: 'black',
        borderColor: 'black',

        '&:hover': {
            background: 'rgba(0,0,0,0.1)',
            borderColor: 'black'
        },

        '.MuiTouchRipple-ripple': {
            background: 'rgba(0,0,0,0.2)'
        }
    }
}))

