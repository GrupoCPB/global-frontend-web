import { styled } from '@material-ui/core';
import Form from '../../ui/components/Cadastro/Form/Form';

const PageWrapper = styled('main')`
    background: #520B3190;
    padding: 50px 0;
`

export default function CadastroORG() {
    return(
        <PageWrapper>
            <Form/>
        </PageWrapper>
    )
}