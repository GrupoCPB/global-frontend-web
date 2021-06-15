import { 
    FooterMUI,
    BoxMUI, 
    Info,
    Contato,
    Nav,
    News,
    Title,
    LowerBar,
    LowerSocialMedia
} from './Footer.styles';
import  Link  from 'next/link';

export default function Footer() {
    return(
        <FooterMUI>
            <BoxMUI>
                <Info>
                    <Title>
                        <img src={"/img/logo.png"}/>
                        <h3>Global ORG</h3>
                    </Title>

                    <div>
                        <p>
                            Plataforma de soluções para
                            conectar ONGs e Projetos Sociais 
                            com Empresas, Voluntários e 
                            pessoas que precisam de ajuda 
                            pelo mundo. 
                        </p>
                    </div>

                    <LowerSocialMedia>
                        <a href="#"><img src={'/icons/YouTube.png'} alt=""></img></a>
                        <a href="#"><img src={'/icons/LinkedIn.png'} alt=""></img></a>
                        <a href="#"><img src={'/icons/IG.png'} alt=""></img></a>
                        <a href="#"><img src={'/icons/WPP.png'} alt=""></img></a>
                        <a href="#"><img src={'/icons/FB.png'} alt=""></img></a>
                        <a href="#"><img src={'/icons/Twitter.png'} alt=""></img></a>
                    </LowerSocialMedia>
                </Info>

                <Contato>
                    <Title>
                        <h3>Contato</h3>
                    </Title>

                    <ul>
                        <li>
                            <a>Chat Online</a>
                        </li>
                        <li>
                            Contato@ongcpb.org
                        </li>
                        <li>
                            WhatsApp: +55 11 95849-4693
                        </li>
                    </ul>
                </Contato>

                <Nav>
                    <Title>
                        <h3>Navegação</h3>
                    </Title>

                    <ul>
                        <li>
                            <Link href='/'>Nossas plataformas</Link>
                        </li>
                        <li>
                            <Link href='/'>Quem somos</Link>
                        </li>
                        <li>
                            <Link href='/'>Cadastro</Link>
                        </li>
                        <li>
                            <Link href='/'>Sou uma ONG</Link>
                        </li>
                        <li>
                            <Link href='/'>FAQ</Link>
                        </li>
                        <li>
                            <Link href='/'>Ajuda</Link>
                        </li>
                        <li>
                            <Link href='/'>Quero ser voluntário</Link>
                        </li>
                        <li>
                            <Link href='/'>
                                Para empresas
                            </Link>
                        </li>
                    </ul>
                </Nav>

                <News>
                    <Title>
                        <h3>Newsletter</h3>
                    </Title>
                    <p>Fique por dentro das novidades da Global ORG!
                    Não perca nenhuma vaga ou novidade.</p>
                    <form>
                        <input type='text' placeholder='Nome'></input>
                        <input type='text' placeholder='E-mail'></input>
                        <input type='text' placeholder='Cidade'></input>
                        <button type='submit'>Inscrever-se</button>
                    </form>

                </News>
            </BoxMUI>
            <LowerBar>
                <span>&copy;2021 Global ORG | Todos os direitos reservados</span>
                <span>Política de Privacidade | Termos de serviço</span>
            </LowerBar>
        </FooterMUI>
    )
}