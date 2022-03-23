import { Button } from '@material-ui/core';
import { StyledHomepageCard } from '../../../../styles/donation/HomepageGreyCard.styles';

type GrayCardType = {
    target: 'empresa' | 'consumidor',
    content: String,
    buttonText: String
}

export default function BasicGreyCard({ target, content, buttonText }: GrayCardType) {
    return (
        <StyledHomepageCard>
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

            <div>
                <p className='grey-card-content'>
                    {content}
                </p>
            </div>

            <Button
                className='grey-card-button'
                variant='contained'
                color={target === 'empresa' ? 'primary' : 'secondary'}
                sx={{padding: '10px 20px'}}
            >
                {buttonText}
            </Button>
        </StyledHomepageCard>
    )
}