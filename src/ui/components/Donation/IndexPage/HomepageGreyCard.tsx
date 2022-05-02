import { Button, Grid } from '@material-ui/core';
import { StyledHomepageCard } from '../../../../styles/donation/HomepageGreyCard.styles';

type GrayCardType = {
    target: 'empresa' | 'consumidor',
    content: String,
    buttonText: String
}

export default function BasicGreyCard({ target, content, buttonText }: GrayCardType) {
    return (
        <StyledHomepageCard>
            <Grid container columns={2}>
                <Grid item xs={2} sm={2} md={2} lg={2}>
                    <div className='gray-card-top'>
                        <img src={target === 'empresa' ? '/donation_images/empresa-icon.png' : '/donation_images/consumidor-icon.png'} />
                        <div className='gray-card-title'>
                            <h2>Global Donation</h2>
                            {
                                target === 'empresa' ?
                                    <h2 className='empresa'>Empresa</h2>
                                    :
                                    <h2 className='consumidor'>Consumidor</h2>
                            }
                        </div>
                    </div>
                </Grid>

                <Grid item xs={2} sm={2} md={2} lg={2}>
                    <div>
                        <p className='grey-card-content'>
                            {content}
                        </p>
                    </div>
                </Grid>

                <Grid item xs={2} sm={2} md={2} lg={2}>
                    <Button
                        className='grey-card-button'
                        variant='contained'
                        color={target === 'empresa' ? 'primary' : 'secondary'}
                        sx={{ padding: '10px 20px' }}
                    >
                        {buttonText}
                    </Button>
                </Grid>
            </Grid>
        </StyledHomepageCard>
    )
}