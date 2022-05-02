import MetasCard from "./MetasCard";
import { Grid } from '@material-ui/core';
import { StyledMetasEmDestaqueContainer } from "../../../../styles/donation/MetasEmDestaque.styles";

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
        <StyledMetasEmDestaqueContainer maxWidth='xl'>
            <h1 style={{textAlign: 'center'}}>Metas em destaque</h1>

            <Grid 
                container 
                columns={4} 
                columnSpacing={{xs: 0, sm: 1, md: 2, lg: 2}} 
                rowSpacing={{xs: 4,sm: 4, md: 2}} 
            >
                {
                    metas_em_destaque.map(el => {
                        return (
                            <Grid item sm={4} md={2} lg={1}>
                                <MetasCard
                                    nome_projeto={el.nome_projeto}
                                    valor={el.valor}
                                    nome_ong={el.nome_ong}
                                    content={el.content}
                                    votos={el.votos}
                                    key={Math.random() * 1000}
                                />
                            </Grid>
                        )
                    })
                }
            </Grid>
        </StyledMetasEmDestaqueContainer>
    )
}