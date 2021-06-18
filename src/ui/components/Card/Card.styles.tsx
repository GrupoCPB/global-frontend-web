import { styled } from '@material-ui/core/styles';
import { Card, Typography, CardActionArea } from '@material-ui/core';

export const CardWrapper = styled(Card)`
  background-color: #f0f5f7;
  border-radius: 13px;
  min-width: 220px;
  height: 217px;
  box-shadow: 0px 6.81305px 11.9228px rgba(0, 0, 0, 0.2);
  margin-bottom: 19px;

  ${({ theme }) => theme.breakpoints.down('sm')} {
    margin-right: 15px;
  }
`;

export const CardAction = styled(CardActionArea)`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
  justify-content: flex-end;
  align-items: center;
`;

export const TitleBox = styled(Typography)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  height: 60px;
`;

export const TitleCard = styled(Typography)`
  color: #11709e;
  font-size: 17x;
  text-transform: uppercase;
  font-family: Merriweather;
  font-weight: 900;
`;

export const OptionalTitle = styled(Typography)`
  color: #C75491;
  font-size: 13px;
  font-family: Merriweather;
  font-weight: 900;
`;
