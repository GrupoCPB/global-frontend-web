import React from 'react';

import {
  Apresentacao,
  ImgApresentation,
} from '../../styles/Public.styles';

import {
  BodySection,
  ContainerSection,
  ButtonCadastro,
} from './SobreOng.styles';

export default function SobreOng() {
  return (
    <BodySection>
      <ContainerSection>
        <Apresentacao>
          <h1> Conheça a Global ORG </h1>

          <p>
            A GLOBAL ORG faz parte do Conselho do Povo Brasileiro (CPB),
            organização que promove cooperação internacional e conecta projetos
            sociais com empresas, voluntários e pessoas que precisam de ajuda
            pelo mundo.
          </p>

          <h2>Se interessou?</h2>

          <p>
            Cadastre‌ ‌a‌ ‌sua‌ ‌ONG‌ ‌na‌ ‌nossa‌ ‌plataforma‌ ‌e‌ ‌alcance‌ voluntários‌ ‌do‌ ‌mundo‌ ‌todo.‌ ‌
            A‌ ‌Global‌ ORG‌ ‌também‌ oferece‌ ‌uma‌ ‌série‌ ‌de‌ ‌ferramentas‌ ‌de‌ ‌gerenciamento‌ para‌ ‌
            a‌ ‌sua‌ ‌ONG!‌
          </p>

          <ButtonCadastro variant="contained">Cadastre sua ONG</ButtonCadastro>
          <ButtonCadastro variant="contained">Seja um voluntário</ButtonCadastro>
        </Apresentacao>

        <div>
          <ImgApresentation src="/img/home/globo.svg" alt="" />
        </div>
      </ContainerSection>
    </BodySection>
  );
}
