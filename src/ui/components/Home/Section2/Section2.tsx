import React from 'react';
// import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import {
  BodySection, GroupCard, ContainerFloat } from '../../Home/Section2/Section2.styles';

// import { Apresentacao, ImgApresentation } from '../../../styles/Public.styles';
// eslint-disable-next-line import/extensions
import CardButton from '../../Card/CardButton';

function Section2() {
  return (
    <BodySection>
      <ContainerFloat>
        <h1>BUSQUE POR CATEGORIA DE INTERESSE</h1>
        <GroupCard>
          <CardButton imgName="ONGS.svg" title="ongs" />
          <CardButton imgName="CAUSAS.svg" title="causas" />
          <CardButton imgName="HABILIDADES.svg" title="habilidades" />
          <CardButton imgName="PLATAFORMAS.svg" title="plataformas" subTitle="Em breve" />
          <CardButton imgName="VAGAS.svg" title="vagas" subTitle="Em breve" />
        </GroupCard>
      </ContainerFloat>
{/*
      <ContainerSction>

        <div>
          <ImgApresentation src="/img/home/facaParte.svg" alt="" />
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

      </ContainerSction> */
}
    </BodySection>
  );
}

export default Section2;
