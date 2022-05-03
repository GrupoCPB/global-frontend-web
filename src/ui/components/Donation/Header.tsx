import { StyledHeader } from "../../../styles/donation/Header.styles";
import HeaderLinks from "./HeaderLinks";
import DonationLogo from './Logo';
import { Container, Button } from "@material-ui/core";
import LoginOptions from './LoginOptions';


export default function DonationHeader() {
    return (
        <StyledHeader>
            <HeaderLinks />

            <Container maxWidth='xl' className='donation-header-main-bar'>
                <DonationLogo />

                <nav className='top-bar-nav'>
                    <ul className='top-bar-ul'>
                        <li>
                            <a href='#'>
                                Doação
                            </a>
                        </li>

                        <li>
                            <a href='#'>
                                Plataformas
                            </a>
                        </li>

                        <li>
                            <a href='#'>
                                Contato
                            </a>
                        </li>

                        <li>
                            <a href='#'>
                                Serviços
                            </a>
                        </li>
                    </ul>

                    <div className='login-or-signin'>
                        <LoginOptions />

                        <Button
                            className='variant-contained'
                            variant='contained'
                            color='secondary'
                        >
                            Seja um doador
                        </Button>
                    </div>
                </nav>
            </Container>
        </StyledHeader>
    )
}