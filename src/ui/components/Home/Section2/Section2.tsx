import React from 'react';
import { BodySection, GroupCard, ContainerFloat } from './Section2.styles';
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
    </BodySection>
  );
}

export default Section2;
