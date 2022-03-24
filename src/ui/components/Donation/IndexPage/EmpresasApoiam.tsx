import EmpresaIcon from './EmpresaIcon';
import { Container } from '@material-ui/core';
import { StyledContainer } from '../../../../styles/donation/EmpresasApoiam.styles';

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
                        return <EmpresaIcon imgSrc={el} key={Math.random() * 1000} />
                    })
                }
            </Container>
        </StyledContainer>
    )
}