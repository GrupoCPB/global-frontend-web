import { StyledHeader } from "../../../styles/donation/Header.styles";
import HeaderLinks from "./HeaderLinks";
import DonationLogo from './Logo';
import { Container } from "@material-ui/core";
import BasicButton from "../Buttons/BasicButton";

export default function DonationHeader() {
    return (
        <StyledHeader>
            <HeaderLinks />

            <Container className='donation-header-main-bar'>
                <DonationLogo />
                
                <nav>
                    <ul>
                        <li>
                            <a href='#'>
                                Home
                            </a>
                        </li>

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
                        <button className='login-button'>
                            Login
                            <img src='/donation_images/arrow_down.png' />
                        </button>
                        <BasicButton className='variant-contained' variant="contained" text='Seja um doador' />
                    </div>
                </nav>
            </Container>
        </StyledHeader>
    )
}