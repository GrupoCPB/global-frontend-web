import React from 'react'
import { BodySection, ContainerSction, Apresentacao, BotaoFerrmentas } from './Section5.styles'
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';

function Section2() {
    return (
        <BodySection>
            <ContainerSction>


                <Apresentacao>

                    <h1> Global ORG para empresas </h1>

                    <p>
                        Estratégia e implementação de voluntariado empresarial e responsabilidade social: essas são as nossas paixões e especialidades.
                    </p>



                    <BotaoFerrmentas variant="contained" >
                        Conheça nossas ferramentas
                    </BotaoFerrmentas>

                </Apresentacao>

                <div>
                    <img src={"/img/home/GlobalOrgParaEmpresas.svg"} alt="" />
                </div>


            </ContainerSction>
        </BodySection>
    )
}

export default Section2
