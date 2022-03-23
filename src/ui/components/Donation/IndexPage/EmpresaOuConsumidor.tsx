import BasicGreyCard from "./HomepageGreyCard";
import { Container } from "@material-ui/core";

export default function EmpresaOuConsumidor() {
    return (
        <Container className='empresaOuConsumidor-section'>
            <BasicGreyCard
                target='empresa'
                content='Encante e engaje seus clientes com as causas sociais que 
        são a cara do seu negócio! Integrando nossa tecnologia ao sistema da sua empresa, fica fácil destinar uma pequena porcentagem das suas vendas para as causas que deseja apoiar!'
                buttonText='Quero saber mais!'
            />

            <BasicGreyCard
                target='consumidor'
                content='Você pode comprar de empresas com responsabilidade social que tem o compromisso de apoiar uma causa social a cada compra. Ao comprar nestas lojas e demandar um consumo mais consciente você reafirma e ajuda a mais empresas polinizarem o mundo!'
                buttonText='Compre e doe!'
            />
        </Container>
    )
}