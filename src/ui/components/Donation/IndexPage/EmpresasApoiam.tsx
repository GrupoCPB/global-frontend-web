import EmpresaIcon from './EmpresaIcon';
import { Container } from '@material-ui/core';
import { StyledContainer } from '../../../../styles/donation/EmpresasApoiam.styles';
import { Grid } from '@material-ui/core';

export default function EmpresasApoio() {
    return (
        <StyledContainer>
            <Container maxWidth='xl' className='inner-container'>
                <h1>Empresas que apoiam esta organização</h1>
                <Grid container columns={10} spacing={2}>
                    {
                        [
                            '/donation_images/empresas-icons/uniflores.png',
                            '/donation_images/empresas-icons/quatroestrelas.png',
                            '/donation_images/empresas-icons/curly.png',
                            '/donation_images/empresas-icons/caligo.png',
                            '/donation_images/empresas-icons/uniflores.png',
                        ].map(el => {
                            return (
                                <Grid item sm={10} md={5} lg={2}>
                                    <EmpresaIcon imgSrc={el} key={Math.random() * 1000} />
                                </Grid>
                            )
                        })
                    }
                </Grid>
            </Container>
        </StyledContainer>
    )
}