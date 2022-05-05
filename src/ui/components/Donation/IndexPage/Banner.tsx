import { Button, Grid } from '@material-ui/core';
import { StyledBannerWrapper } from '../../../../styles/donation/Banner.styles';

export default function Banner() {
    return (
        <StyledBannerWrapper maxWidth='xl'>
                <Grid container columns={2} alignItems={'center'}>
                    <Grid item xs={2} sm={2} md={2} lg={1} alignSelf='flex-start' sx={{marginTop: '50px'}}>
                        <div className='banner-text-div'>
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
                    </Grid>

                    <Grid item xs={2} sm={2} md={2} lg={1}>
                        <img src='./donation_images/index-banner-image.png' />
                    </Grid>
                </Grid>

        </StyledBannerWrapper>
    )
}