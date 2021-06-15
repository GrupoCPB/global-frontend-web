import React from 'react'
import { BodySection, ContainerSction, Apresentacao, ButtonCadastro } from './Section3.styles'
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';

function Section2() {
    return (
        <BodySection>
            <ContainerSction>


                <Apresentacao>

                    <h1> Participe como voluntário </h1>

                    <p>
                        Encontre a sua oportunidade para mudar o mundo!
                        Busque por uma vaga de voluntariado e candidate-se.
                        Em alguns dias, a ONG irá entrar em contato com você.
                    </p>



                    <ButtonCadastro variant="contained" endIcon={<ArrowForwardIcon />}>
                        Encontre a sua vaga
                    </ButtonCadastro>

                </Apresentacao>

                <div>
                    <img src={"/img/home/ParticipeComVoluntario.svg"} alt="" />
                </div>


            </ContainerSction>
        </BodySection>
    )
}

export default Section2
