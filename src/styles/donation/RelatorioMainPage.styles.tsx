import { styled } from "@material-ui/core";

export const StyledMainRelatorioWrapper = styled('main')(({ theme }) => ({
    '.section:not(.relatorio-section-1)': {
        marginTop: '50px'
    },

    '.relatorio-section-1': {
        background: `${theme.palette.grey['100']}`,
    },

    '.relatorio-text-div': {
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
        '.relatorio-section-2-first-box': {
            display: 'flex',
            alignItems: 'center',
            margin: '20px 0 10px',

            '.checkboxes-box': {
                marginLeft: '40px'
            }
        },

        '.relatorio-section-2-second-box': {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
        },

        '.relatorio-section-2-third-box': {
            'table': {
                width: '100%',
                borderSpacing: '0',

                'td': {
                    borderBottom: 'solid 1px #00000013',
                    padding: '10px 0',

                    '&:first-of-type': {
                        fontWeight: '600'
                    }
                },

                'tr': {
                    width: '100%',

                    '&:last-of-type': {
                        'td': {
                            border: 'none'
                        }
                    }
                },

                '.table-value': {
                    width: '80%',
                    color: 'green',
                    fontWeight: '600',

                    '&.negative': {
                        'span': {
                            color: 'red'
                        }
                    }
                }
            }
        }
    },

    '.relatorio-section-3': {
        display: 'grid',

        'table': {
            borderSpacing: '0',
            borderCollapse: 'separate',
            width: '100%',
            marginBottom: '60px',

            'tr': {
                '&:nth-of-type(even)': {
                    background: `${theme.palette.grey['50']}`
                }
            },

            'td': {
                padding: '15px 10px',
                borderBottom: `solid 1px ${theme.palette.grey['100']}`,

                '&:last-of-type': {
                    textAlign: 'right'
                },

                '&:first-of-type': {
                    fontWeight: '700'
                }
            }
        }
    },

    '.mais-doacoes': {
        placeSelf: 'center',
        width: 'max-content',
        fontWeight: '600'
    }
}))

