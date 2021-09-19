import React from 'react'
import { BodySection, ContainerSction, ButtonCadastro } from './Section4.styles'
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import { Apresentacao, ImgApresentation } from '../../../globalComponentStyles/Public.styles'

function Section2() {
    return (
        <BodySection>
            <ContainerSction>

                <div>
                    <ImgApresentation src={"/img/home/BENEFICIOSGLOBAL.svg"} alt="" />
                </div>

                <Apresentacao>

                    <h1> Benefícios de fazer parte da Global ORG </h1>

                    <p>
                        Além de alcançar voluntários do mundo todo, você também tem acesso às nossas ferramentas de gerenciamento para otimizar o trabalho da sua ONG.
                    </p>


                </Apresentacao>


            </ContainerSction>
        </BodySection>
    )
}

export default Section2
