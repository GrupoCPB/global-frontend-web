import { styled } from '@material-ui/core/styles';

const Title = styled('h1')`
    text-align: center;
    margin: 50px 0 0;
    font-family: Merriweather;
`;

const Wrapper = styled('div')`
    box-sizing: border-box;
    display: flex;
    flex-wrap: wrap;
    width: 100vw;
    margin: 0px 0px 100px 0px;
    padding: 0 30px;
`;

const BasicCard = styled('div')`
    display: grid;
    grid-template-rows: 70% 30%;
    place-items: center;
    background: #F0F5F7;
    border-radius: 8px;
    height: 240px;
    width: 240px;
    font-family: Merriweather;
    margin: 50px auto;
    padding: 10px;
    box-sizing: border-box;

    h4 {
        color: #11709E;
        font-weight: 800;
    }
`;

export default function Cards() {
    return (
        <>
            <Title>Busque por categoria de interesse</Title>
            <Wrapper>
                <BasicCard>
                    <img src='./homepage_imgs/causas.png'/>
                    <h4>CAUSAS</h4>
                </BasicCard>

                <BasicCard>
                    <img src='./homepage_imgs/reputacao.png'/>
                    <h4>REPUTAÇÃO</h4>
                </BasicCard>

                <BasicCard>
                    <img src='./homepage_imgs/habilidades.png'/>
                    <h4>HABILIDADES</h4>
                </BasicCard>

                <BasicCard>
                    <img src='./homepage_imgs/plataformas.png'/>
                    <h4>PLATAFORMAS</h4>
                </BasicCard>

                <BasicCard>
                    <img src='./homepage_imgs/vagas.png'/>
                    <h4>VAGAS</h4>
                </BasicCard>
            </Wrapper>

        </>
    )
}