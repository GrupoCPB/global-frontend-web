import { styled } from '@material-ui/core';

export const StyledDonationMainPageWrapper = styled('div')(({ theme }) => ({
    background: `${theme.palette.grey['50']}`,

    '.banner_section': {
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        placeItems: 'center',
        background: 'linear-gradient(311.76deg, #D4E7FE -15.24%, #FFFFFF 78.85%)',
        paddingBottom: '80px',
        fontFamily: 'Cairo, Sans-serif',

        '& div:first-of-type': {
            padding: '50px 20px 50px 75px',

            '& h1': {
                fontSize: '3vw',
                paddingRight: '70px',
                margin: '0'
            },

            '& p': {
                margin: '30px 0'
            },

            '& button': {
                width: '208px',
                height: '52px',
                background: `${theme.palette.secondary.light}`,
                color: 'white',
                border: 'none',
                borderRadius: '8px',
                cursor: 'pointer',
                fontWeight: 'bold'
            }
        }
    },

    '.empresas_section': {
        '& h2': {
            textAlign: 'center',
            marginTop: '50px'
        },

        '.apoiadores': {
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-around',
            padding: '0 0 50px',
            
            '& div': {
                background: 'white',
                minWidth: '200px',
                width: '20vw',
                height: '15vw', 
                display: 'grid',
                placeItems: 'center',
                borderRadius: '8px',

                '&:last-of-type': {
                    background: `${theme.palette.primary.dark}`
                }
            }
        }
    }
}))