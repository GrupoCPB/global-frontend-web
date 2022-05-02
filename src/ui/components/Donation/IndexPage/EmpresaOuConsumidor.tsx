import BasicGreyCard from "./HomepageGreyCard";
import { Container, Grid } from "@material-ui/core";

export default function EmpresaOuConsumidor() {
    return (
        <Container maxWidth='xl' className='empresaOuConsumidor-section'>
            <Grid 
                container 
                columns={2} 
                columnSpacing={{xs: 0, sm: 1, md: 2, lg: 2}} 
                rowSpacing={2} 
        
            >
                <Grid item xs={2} sm={2} md={2} lg={1}>
                    <BasicGreyCard
                        target='empresa'
                        content='Encante e engaje seus clientes com as causas sociais que 
                            são a cara do seu negócio! Integrando nossa tecnologia ao sistema da sua empresa, fica fácil destinar uma pequena porcentagem das suas vendas para as causas que deseja apoiar!'
                        buttonText='Quero saber mais!'
                    />
                </Grid>

                <Grid item xs={2} sm={2} md={2} lg={1}>
                    <BasicGreyCard
                        target='consumidor'
                        content='Você pode comprar de empresas com responsabilidade social que tem o compromisso de apoiar uma causa social a cada compra. Ao comprar nestas lojas e demandar um consumo mais consciente você reafirma e ajuda a mais empresas polinizarem o mundo!'
                        buttonText='Compre e doe!'
                    />
                </Grid>
            </Grid>

        </Container>
    )
}