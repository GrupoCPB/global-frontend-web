import React from 'react'
import { BodySection, ContainerSction, EncontrarVaga } from './Section3.styles'
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import { Apresentacao, ImgApresentation } from '../../../globalComponentStyles/Public.styles'

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



                    <EncontrarVaga variant="contained" endIcon={<ArrowForwardIcon />}>
                        Encontre a sua vaga
                    </EncontrarVaga>

                </Apresentacao>

                <div>
                    <ImgApresentation src={"/img/home/ParticipeComVoluntario.svg"} alt="" />
                </div>


            </ContainerSction>
        </BodySection>
    )
}

export default Section2
