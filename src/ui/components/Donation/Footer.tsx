import { StyledFooter } from '../../../styles/donation/Footer.styles';
import { Container, Button, Grid } from '@material-ui/core';
import DonationLogo from './Logo';
import SocialMediaLinks from './SocialMediaLinks';

export default function DonationFooter() {
    return (
        <StyledFooter>
            <Container maxWidth='xl' className='footer-inner-wrapper-1'>
                <Grid container columns={4} className='the-grid'>
                    <Grid item xs={4} sm={4} md={4} lg={1}>
                            <DonationLogo size='small' />
                    </Grid>

                    <Grid item xs={4} sm={4} md={4} lg={1}>
                            <h2>Institucional</h2>

                            <ul>
                                <li>
                                    <a>Doação</a>
                                </li>

                                <li>
                                    <a>Plataformas</a>
                                </li>

                                <li>
                                    <a>Contato</a>
                                </li>

                                <li>
                                    <a>Serviços</a>
                                </li>
                            </ul>
                    </Grid>

                    <Grid item xs={4} sm={4} md={4} lg={1}>
                            <h2>Política e termos</h2>

                            <ul>
                                <li>
                                    <a>Política de Privacidade</a>
                                </li>

                                <li>
                                    <a>Termos de serviço</a>
                                </li>
                            </ul>
                    </Grid>

                    <Grid item xs={4} sm={4} md={4} lg={1}>
                            <h2>Assine nossa newsletter</h2>
                            <p>
                                Fique por dentro das novidades da Global ORG! Não perca nenhuma vaga ou novidade.
                            </p>

                            <div className='inputs-container'>
                                <input className='footer-newsletter-email-input' type='email' placeholder='Insira o seu e-mail' />

                                <Button
                                    className='footer-newsletter-send-button'
                                    variant='contained'
                                    endIcon={<img src='/donation_images/send-button.png' alt='send' />}
                                    color='secondary'
                                >
                                    Enviar
                                </Button>
                            </div>
                    </Grid>
                </Grid>
            </Container>

            <hr></hr>

            <Container maxWidth='xl' className='footer-inner-wrapper-2'>
                <span>© 2022 Global Donation  |  Todos os direitos reservados</span>
                <span><SocialMediaLinks /></span>
            </Container>
        </StyledFooter>
    )
}