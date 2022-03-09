import { styled } from '@material-ui/core/styles';
import LoginForm from '../ui/components/Login/Loginform';
import LoginTextPanel from '../ui/components/Login/loginTextPanel';

const MainWrapper = styled('section')`
    display: grid;
    grid-template-columns: 1fr 1fr;
    width: 100%;
`

export default function LoginPage() {
    return(
        <MainWrapper>
            <LoginForm/>
            <LoginTextPanel/>
        </MainWrapper>
    )
}