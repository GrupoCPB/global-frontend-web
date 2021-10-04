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

import cardsData from '../../../../causasData';

export default function Content() {
    return (
        <Page>
            <p>Encontre a causa que mais combina com você e cadastre-se para uma vaga de voluntariado</p>

            <section id='cards_section'>
                {
                    cardsData.map(el => {
                        return (
                            <Card key={el.pathName} src={el.imgsrc} leg={el.titulo} routeName={el.pathName} />
                        )
                    })
                }
            </section>
        </Page>
    )
}