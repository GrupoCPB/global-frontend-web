import React from 'react'
import {
    BodySection,
    Apresentacao,
    ContainerSction,
    Cadastros,
    ButtonCadastro
} from './Section1.styles'
import { Button } from '@material-ui/core'

function section1() {
    return (
        <BodySection>

            <ContainerSction>
                <Apresentacao>

                    <h1> Conheça a Global ORG </h1>

                    <p>
                        A GLOBAL ORG  faz parte do Conselho do Povo Brasileiro (CPB), organização que promove cooperação internacional e conecta projetos sociais com empresas, voluntários e pessoas que precisam de ajuda pelo mundo.
                    </p>

                    <a href="/"> Saiba mais </a>

                    <h2>
                        Se interessou?
                    </h2>

                    <p>
                        Cadastre‌ ‌a‌ ‌sua‌ ‌ONG‌ ‌na‌ ‌nossa‌ ‌plataforma‌ ‌e‌ ‌alcance‌ ‌voluntários‌ ‌do‌ ‌mundo‌ ‌todo.‌ ‌A‌ ‌Global‌ ORG‌ ‌também‌ ‌oferece‌ ‌uma‌ ‌série‌ ‌de‌ ‌ferramentas‌ ‌de‌ ‌gerenciamento‌ ‌para‌ ‌a‌ ‌sua‌ ‌ONG!‌
                    </p>

                    <ButtonCadastro variant="contained">Cadastre sua ONG</ButtonCadastro>

                    <ButtonCadastro variant="contained">Seja um voluntário</ButtonCadastro>
                </Apresentacao>

                <div>
                    <img src={"https://images.vexels.com/media/users/3/157971/isolated/preview/393140c13ded6abdd322098d2d02a6d7-earth-planet-illustration-by-vexels.png"} alt="" width="259px" />
                </div>

            </ContainerSction>





        </BodySection>
    )
}

export default section1

