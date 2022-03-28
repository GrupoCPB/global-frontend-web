import { Button } from '@material-ui/core';
import { StyledBanner, StyledBannerWrapper } from '../../../../styles/donation/Banner.styles';

export default function Banner() {
    return (
        <StyledBannerWrapper>
            <StyledBanner maxWidth='xl'>
                <div>
                    <h1>Faça sua doação para a causa certa</h1>

                    <p>
                        Nossa missão é sermos responsáveis em distribuir toda suas doações para ONGs e Projetos Sociais sérios que passam por nossa inspeção e consultoria.
                    </p>

                    <Button
                        variant='contained'
                        color='secondary'
                        sx={{
                            padding: '10px 60px'
                        }}
                    >
                        Seja um doador
                    </Button>
                </div>
                <div>
                    <img src='./donation_images/index-banner-image.png' />
                </div>
            </StyledBanner>
        </StyledBannerWrapper>
    )
}