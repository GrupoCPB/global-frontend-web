import { styled } from '@material-ui/core/styles';
import Link from 'next/link';
import BasicTextInput from '../Inputs/basicTextInput';
import { Form } from '../formTemplate';

const Wrapper = styled('div')`
    width: 100%;
    height: calc(100vh - 90px);
    display: grid;
    place-items: center;

    #afterInputsDiv {
        margin-top: 15px;
        display: grid;
        grid-template-columns: 1fr 1fr;

        a {
            text-align: right;
        }
    }
    #spanCadastro {
        margin-top: 25px;
        color: rgba(140, 138, 151, 1);
    }
`;

export default function LoginForm() {
    return (
        <Wrapper>
            <Form>
                <BasicTextInput type='email' title='E-mail' required={true}/>
                
                <BasicTextInput type='password' title='Senha' required={true}/>
                
                <div id='afterInputsDiv'>
                    <div id='rememberUserDiv'>
                        <input type='checkbox' />
                        <span>Lembrar meu usuário</span>
                    </div>

                    <Link href='/'>Esqueceu sua senha?</Link>
                </div>

                <button onClick={() => { }}>Entrar</button>

                <span id='spanCadastro'>Não tem uma conta? <Link href='/'>Cadastre-se</Link></span>
            </Form>
        </Wrapper>
    )
}