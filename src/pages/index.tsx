import Head from 'next/head';
import Carrossel from '../ui/components/Home/carrossel';
import Cards from '../ui/components/Home/cardsCategorias/cards';
import { styled } from '@material-ui/core';


const MainWrapper = styled('div')`
  max-width: 100vw;
  overflow-x: hidden;
`

export default function Home() {
  return (
    <MainWrapper>
      <Carrossel/>
      <Cards/>
    </MainWrapper>
  )
}
