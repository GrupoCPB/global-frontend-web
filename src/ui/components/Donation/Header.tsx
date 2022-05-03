import { StyledHeader } from "../../../styles/donation/Header.styles";
import HeaderLinks from "./HeaderLinks";
import DonationLogo from './Logo';
import { Container, Button, Grid } from "@material-ui/core";
import LoginOptions from './LoginOptions';
import Link from 'next/link';


export default function DonationHeader() {
    return (
        <>
            <HeaderLinks />

            <Container maxWidth='xl' component={StyledHeader}>
                <div className='main-flex-div'>
                    <div className='div-1'>
                        <DonationLogo />
                    </div>

                    <nav className='nav'>

                        <ul className='nav-ul-1'>

                            <li>
                                <Link href='#'>Doação</Link>
                            </li>

                            <li>
                                <Link href='#'>Plataformas</Link>
                            </li>

                            <li>
                                <Link href='#'>Contato</Link>

                            </li>

                            <li>
                                <Link href='#'>Serviços</Link>
                            </li>

                        </ul>

                        <ul className='nav-ul-2'>
                            <li>
                                <LoginOptions />
                            </li>

                            <li>
                                <Button
                                    className='variant-contained'
                                    variant='contained'
                                    color='secondary'
                                >
                                    Seja um doador
                                </Button>
                            </li>
                        </ul>
                    </nav>
                </div>
            </Container>
        </>
    )
}