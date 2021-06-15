import React from 'react'
import {
    BodySection,
    ContainerSction,
    ButtonCadastro
<<<<<<< HEAD
} from './Section1.styles'
import { Button } from '@material-ui/core'
=======
} from './section1.styles'

import { Apresentacao, ImgApresentation } from '../../../styles/Public.styles'

>>>>>>> ffdd51a129ec5037ba8d6b7f9c1251eef4a2ea95

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
                    <ImgApresentation src={"/img/home/globo.svg"} alt="" />
                </div>

            </ContainerSction>





        </BodySection>
    )
}

export default section1

