import { Button, Container } from '@material-ui/core';

export default function Banner() {
    return (
        <Container className='banner-section' maxWidth='xl'>
            <div>
                <h1>Faça sua doação para a causa certa</h1>

                <p>
                    Nossa missão é sermos responsáveis em distribuir toda suas doações para ONGs e Projetos Sociais sérios que passam por nossa inspeção e consultoria.
                </p>

                <Button
                    variant='contained'
                    color='secondary'
                >
                    Seja um doador
                </Button>
            </div>
            <div>
                <img src='./donation_images/index-banner-image.png' />
            </div>
        </Container>
    )
}