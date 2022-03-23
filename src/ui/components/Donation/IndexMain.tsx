import { StyledDonationMainPageWrapper } from "../../../styles/donation/DonationMainPage.styles";
import { Button, Container } from '@material-ui/core';
import BasicGreyCard from './HomepageGreyCard';
import MetasCard from "./MetasCard";

export default function Index() {
    const metas_em_destaque = [
        {
            nome_projeto: 'Projeto 1',
            valor: 'R$ 5.000,00/Mês',
            nome_ong: 'ONG Global ORG',
            content: 'Alugar e manter uma Casa que será a Sede das ONGs e Projetos Sociais da Fraternidade CPB em São Paulo/Centro ao lado do metrô da linha vermelha ou verde com escritório e quartos de acolhimento emergencial.',
            votos: '16,656'
        },
        {
            nome_projeto: 'Projeto 2',
            valor: 'R$ 6.800,00/Mês',
            nome_ong: 'ONG CPB',
            content: 'Alugar e manter uma Casa que será a Sede das ONGs e Projetos Sociais da Fraternidade CPB em São Paulo/Centro ao lado do metrô da linha vermelha ou verde com escritório e quartos de acolhimento emergencial.',
            votos: '16,656'
        },
        {
            nome_projeto: 'Projeto 3',
            valor: 'R$ 6.800,00/Mês',
            nome_ong: 'ONG LGBT+ do Brasil',
            content: 'Alugar e manter uma Casa que será a Sede das ONGs e Projetos Sociais da Fraternidade CPB em São Paulo/Centro ao lado do metrô da linha vermelha ou verde com escritório e quartos de acolhimento emergencial.',
            votos: '16,656'
        },
        {
            nome_projeto: 'Projeto 4',
            valor: 'R$ 12.600,00/Mês',
            nome_ong: 'ONG Pais Afetivos',
            content: 'Alugar e manter uma Casa que será a Sede das ONGs e Projetos Sociais da Fraternidade CPB em São Paulo/Centro ao lado do metrô da linha vermelha ou verde com escritório e quartos de acolhimento emergencial.',
            votos: '16,656'
        }
    ]


    return (
        <StyledDonationMainPageWrapper>
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

            <Container className='empresaOuConsumidor-section'>
                <BasicGreyCard
                    target='empresa'
                    content='Encante e engaje seus clientes com as causas sociais que 
                são a cara do seu negócio! Integrando nossa tecnologia ao sistema da sua empresa, fica fácil destinar uma pequena porcentagem das suas vendas para as causas que deseja apoiar!'
                    buttonText='Quero saber mais!'
                />

                <BasicGreyCard
                    target='consumidor'
                    content='Você pode comprar de empresas com responsabilidade social que tem o compromisso de apoiar uma causa social a cada compra. Ao comprar nestas lojas e demandar um consumo mais consciente você reafirma e ajuda a mais empresas polinizarem o mundo!'
                    buttonText='Compre e doe!'
                />
            </Container>

            <Container className='metasEmDestaque-section'>
                <h1>Metas em destaque</h1>
                {
                    metas_em_destaque.map(el => {
                        return (
                            <MetasCard
                                nome_projeto={el.nome_projeto}
                                valor={el.valor}
                                nome_ong={el.nome_ong}
                                content={el.content}
                                votos={el.votos}
                                key={Math.random() * 1000}
                            />
                        )
                    })
                }
            </Container>


        </StyledDonationMainPageWrapper>
    )
}