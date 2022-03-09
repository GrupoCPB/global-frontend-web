import { styled } from '@material-ui/core/styles';

const Wrapper = styled('div')`
    background-image: url('./background_template.png');
    text-align: center;
    padding: 80px;
    width: 100%;
    background-repeat: no-repeat;
    box-sizing: border-box;
    background-size: cover;
    display: grid;
    place-items: center;
    
    img {
        width: 90px;
        height: 90px;
        margin-bottom: 30px;
    }
    
    h1 {
        font-family: Merriweather;
        font-size: 32px;
        font-weight: 700;
        line-height: 42px;
        color: rgba(52, 50, 62, 1);
    }
    
    p {
        font-family: Open Sans;
        font-size: 18px;
        font-style: normal;
        font-weight: 400;
        line-height: 27px;
        letter-spacing: 0px;
        text-align: center;
        color: rgba(78, 75, 89, 0.9);
    }
`;

export default function LoginPage() {
    return(
        <Wrapper>
            <div>
                <img src='./logo.png'/>

                <h1>Crie uma conta na Global ORG pra a sua causa ou empresa</h1>

                <p>Divulgue suas vagas de voluntariado, tenha acesso às nossas ferramentas de gestão e faça parte da comunidade Global ORG.</p>
            </div>
        </Wrapper>
    )
}