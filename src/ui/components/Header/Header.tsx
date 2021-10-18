import React from 'react';
import SearchBarInput from '../SearchBar/SearchBar';
import {
  HeaderAppBar,
  HeaderLogo,
  SecondaryAppBar,
  SocialMedias,
} from './Header.styles';


function Header() {
  return (
    <>
      <HeaderAppBar position={'relative'}>
        <SocialMedias>
          <a href="#"><img src="/icons/YouTube.png" alt="" /></a>
          <a href="#"><img src="/icons/LinkedIn.png" alt="" /></a>
          <a href="#"><img src="/icons/IG.png" alt="" /></a>
          <a href="#"><img src="/icons/WPP.png" alt="" /></a>
          <a href="#"><img src="/icons/FB.png" alt="" /></a>
          <a href="#"><img src="/icons/Twitter.png" alt="" /></a>
        </SocialMedias>
      </HeaderAppBar>

      <SecondaryAppBar position="relative">
        <HeaderLogo src={'/img/logo.png'} alt={'Globall org'} />
        <SearchBarInput />
        <ul>
          <li>
            <a>Home</a>
          </li>
          <li>
            <a>Ajuda a comunidade</a>
          </li>
          <li>
            <a>Doação</a>
          </li>

          <li>
            <a>Sou uma causa</a>
          </li>

          <li>
            <a>Para empresas</a>
          </li>

          <li>
            <a>Contato</a>
          </li>
        </ul>
      </SecondaryAppBar>
    </>
  );
}

export default Header