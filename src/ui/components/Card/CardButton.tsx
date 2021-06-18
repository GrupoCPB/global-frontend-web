import React from 'react';
import {
  CardWrapper, TitleCard, OptionalTitle, TitleBox, CardAction,
} from './Card.styles';

type CardProps = {
  title: string,
  subTitle?: string,
  imgName: string,

}
const CardButton = ({ imgName, title, subTitle = '' }: CardProps) => (
  <CardWrapper>
    <CardAction>
      <img src={`img/home/${imgName}`} alt="" />
      <TitleBox>
        <OptionalTitle>
          {subTitle}
        </OptionalTitle>
        <TitleCard>
          {title}
        </TitleCard>
      </TitleBox>
    </CardAction>
  </CardWrapper>
);

export default CardButton;
