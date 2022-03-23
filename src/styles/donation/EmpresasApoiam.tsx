import { Container, styled } from '@material-ui/core';
import EmpresaIcon from './EmpresaIcon';

const StyledContainer = styled(Container)`
    background: ${({ theme }) => theme.palette.grey['100']};
    padding-bottom: 100px;
    padding-top: 100px;

    .inner-container {
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;

        h1 {
            width: 100%;
            text-align: center;
            margin: 0 auto 30px;
        }
    }
`

export default function EmpresasApoio() {
    return (
        <StyledContainer maxWidth='xl'>
            <Container className='inner-container'>
                <h1>Empresas que apoiam esta organização</h1>
                {
                    [
                        '/donation_images/empresas-icons/uniflores.png',
                        '/donation_images/empresas-icons/quatroestrelas.png',
                        '/donation_images/empresas-icons/curly.png',
                        '/donation_images/empresas-icons/caligo.png',
                        '/donation_images/empresas-icons/uniflores.png',
                    ].map(el => {
                        return <EmpresaIcon imgSrc={el} />
                    })
                }
            </Container>
        </StyledContainer>
    )
}