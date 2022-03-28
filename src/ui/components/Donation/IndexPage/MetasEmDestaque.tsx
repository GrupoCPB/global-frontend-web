import { Container } from "@material-ui/core";
import MetasCard from "./MetasCard";

export default function MetasEmDestaque() {
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
        <Container maxWidth='xl' className='metasEmDestaque-section'>
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
    )
}