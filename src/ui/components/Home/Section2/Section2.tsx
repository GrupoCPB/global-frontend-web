import React from 'react'
import { BodySection, ContainerSction, Apresentacao, ButtonCadastro } from './Section2.styles'
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';

function Section2() {
    return (
        <BodySection>
            <ContainerSction>

                <div>
                    <img src={"/img/home/facaParte.svg"} alt="" />
                </div>

                <Apresentacao>

                    <h1> Faça parte da nossa rede </h1>

                    <p>
                        Você é uma ONG e precisa de voluntários? Divulgue a sua vaga para voluntários do Brasil e do mundo.
                    </p>



                    <ButtonCadastro variant="contained" endIcon={<ArrowForwardIcon />}>
                        Cadastre sua vaga aqui
                    </ButtonCadastro>

                </Apresentacao>


            </ContainerSction>
        </BodySection>
    )
}

export default Section2
