import { StyledFooter } from '../../../styles/donation/Footer.styles';
import { Container, Box } from '@material-ui/core';
import DonationLogo from './Logo';
import SocialMediaLinks from './SocialMediaLinks';
import BasicButton from '../Buttons/BasicButton';

export default function DonationFooter() {
    return (
        <Container component={StyledFooter} maxWidth='xl'>
            <Container className='footer-inner-wrapper-1'>
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
                        
                        <BasicButton
                            text='Enviar'
                            className='footer-newsletter-send-button'
                            variant='contained'
                            anyEndIcon={<img src='/donation_images/send-button.png' alt='send' />}
                        />
                    </div>

                </Box>
            </Container>

            <Container className='footer-inner-wrapper-2'>
                <span>© 2022 Global Donation  |  Todos os direitos reservados</span>
                <span><SocialMediaLinks /></span>
            </Container>
        </Container>
    )
}