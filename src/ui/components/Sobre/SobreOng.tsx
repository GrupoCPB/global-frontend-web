import React from "react"
import {
  SobreOngBody,
  SobreOngBtn,
  SobreOngBtn2,
  SobreOngContainer,
  SobreOngContent,
  SobreOngImgContent,
  SobreOngImgContentImg,
  SobreOngSegundoP,

} from "./SobreOng.styles"

import {
    Button
} from "@material-ui/core"

export default function SobreOng() {
    return(
      <SobreOngBody>
        <SobreOngContainer>
            <SobreOngContent>
                <h2>Quem somos</h2>
                <p>
                A GLOBAL ORG faz parte do Conselho do Povo Brasileiro (CPB), organização que promove cooperação internacional, conectando projetos sociais com empresas, voluntários e pessoas que precisam de ajuda pelo mundo.
                </p>

                <a href="#">Saiba mais</a>

                <h3>Se interessou?</h3>
                <SobreOngSegundoP>
                Então venha fazer a diferença! Você pode se candidatar nas vagas já disponíveis aqui ou oferecer diversos tipos de ajuda, clicando em Ajudar a comunidade.
                </SobreOngSegundoP>

                <SobreOngBtn>
                <Button variant="contained" color="secondary">Cadastre sua ONG</Button>
                <SobreOngBtn2 variant="contained" color="secondary">Ajudar a comunidade</SobreOngBtn2>
                </SobreOngBtn>
            </SobreOngContent>
            
            <SobreOngImgContent>
                <SobreOngImgContentImg src="/img/home/globo.svg" />
            </SobreOngImgContent>
        </SobreOngContainer>
    </SobreOngBody>
    )
}