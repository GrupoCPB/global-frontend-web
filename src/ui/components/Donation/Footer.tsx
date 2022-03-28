import { StyledFooter } from '../../../styles/donation/Footer.styles';
import { Container, Box, Button } from '@material-ui/core';
import DonationLogo from './Logo';
import SocialMediaLinks from './SocialMediaLinks';

export default function DonationFooter() {
    return (
        <StyledFooter>
            <Container maxWidth='xl' className='footer-inner-wrapper-1'>
                <Box className='footer-area'>
                    <DonationLogo size='small' />
                </Box>

                <Box className='footer-area'>
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
                </Box>

                <Box className='footer-area'>
                    <h2>Política e termos</h2>

                    <ul>
                        <li>
                            <a>Política de Privacidade</a>
                        </li>

                        <li>
                            <a>Termos de serviço</a>
                        </li>
                    </ul>
                </Box>

                <Box className='footer-area'>
                    <h1>Assine nossa newsletter</h1>
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

                </Box>
            </Container>

            <hr></hr>

            <Container maxWidth='xl' className='footer-inner-wrapper-2'>
                <span>© 2022 Global Donation  |  Todos os direitos reservados</span>
                <span><SocialMediaLinks /></span>
            </Container>
        </StyledFooter>
    )
}