import { styled } from '@material-ui/core/styles';
import Card from './indexContentCard';
import theme from '../../../themes/theme';

const imagens = [
    ['/img/causas/educacao.png', 'Educação'],
    ['/img/causas/criancas.png', 'Crianças'],
    ['/img/causas/saude.png', 'Saúde'],
    ['/img/causas/ambiente.png', 'Meio ambiente'],
    ['/img/causas/esporte.png', 'Esportes'],
    ['/img/causas/frida.png', 'Arte'],
    ['/img/causas/mulheres.png', 'Mulheres'],
    ['/img/causas/raca.png', 'Questões raciais'],
    ['/img/causas/analfabetismo.png', 'Analfabetismo'],
    ['/img/causas/idosos.png', 'Idosos'],
    ['/img/causas/indio.png', 'Indígenas'],
    ['/img/causas/fogo.png', 'Emergencias e desastres'],
    ['/img/causas/empreendedorismo.png', 'Empreendedorismo'],
];

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

export default function Content() {
    return(
        <Page>
            <p>Encontre a causa que mais combina com você e cadastre-se para uma vaga de voluntariado</p>

            <section id='cards_section'>
                {imagens.map(el => {
                    return(
                        <Card src={el[0]} leg={el[1]} />
                    )
                })}
            </section>
        </Page>
    )
}