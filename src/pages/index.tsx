import Head from 'next/head';
import Carrossel from '../ui/components/Home/carrossel';
import Cards from '../ui/components/Home/cardsCategorias/cards';


export default function Home() {
  return (
    <>
      <Carrossel/>
      <button id='esquerda'>esquerda</button>
      <button id='direita'>direita</button>
      <Cards/>
    </>
  )
}
