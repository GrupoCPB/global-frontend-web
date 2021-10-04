import { styled } from '@material-ui/core/styles';
import Card from './indexContentCard';
import theme from '../../../themes/theme';

const Page = styled('section')`
    margin-bottom: 200px;

    p {
        padding: 0 0 15px 120px;
        border-bottom: solid 1.3px ${theme.palette.primary.dark};
    }
    
    #cards_section {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        margin: 0 auto 0 110px;
    }
`
var rawData = [
    ['/img/causas/educacao.png', 'Educação', 'educacao', 'Resumo'],
    ['/img/causas/criancas.png', 'Crianças', 'criancas', 'Resumo'],
    ['/img/causas/saude.png', 'Saúde', 'saude', 'Resumo'],
    ['/img/causas/ambiente.png', 'Meio ambiente', 'meio_ambiente', 'Resumo'],
    ['/img/causas/esporte.png', 'Esportes', 'Resumo', 'esportes', 'Resumo'],
    ['/img/causas/frida.png', 'Arte', 'arte', 'Resumo'],
    ['/img/causas/mulheres.png', 'Mulheres', 'mulher', 'Resumo'],
    ['/img/causas/raca.png', 'Questões raciais', 'questoes_raciais', 'Resumo'],
    ['/img/causas/analfabetismo.png', 'Analfabetismo', 'analfabetismo', 'Resumo'],
    ['/img/causas/idosos.png', 'Idosos', 'idosos', 'Resumo'],
    ['/img/causas/indio.png', 'Indígenas', 'indigenas', 'Resumo'],
    ['/img/causas/fogo.png', 'Emergencias e desastres', 'desastres', 'Resumo'],
    ['/img/causas/empreendedorismo.png', 'Empreendedorismo', 'empreendedorismo', 'Resumo'],
];

function CardData(imgsrc, titulo, pathName, resumo) {
    return {
        imgsrc,
        titulo,
        pathName,
        resumo
    }
}

var cardsData = rawData.map(el => {
    return CardData(el[0], el[1], el[2], el[3])
})

export default function Content() {
    return (
        <Page>
            <p>Encontre a causa que mais combina com você e cadastre-se para uma vaga de voluntariado</p>

            <section id='cards_section'>
                {
                    cardsData.map(el => {
                        return (
                            <Card src={el.imgsrc} leg={el.titulo} routeName={el.pathName} />
                        )
                    })
                }
            </section>
        </Page>
    )
}