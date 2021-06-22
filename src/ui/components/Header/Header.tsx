import React from 'react';
import {
  HeaderAppBar, HeaderLogo, SecondaryAppBar, InputBusca, SocialMedias,
} from './Header.styles';

function Header() {

  return (
    <>
      <HeaderAppBar position="relative">

        <a href="/home">
          <HeaderLogo src="/img/logo.png" alt="Global org" />
        </a>

        <InputBusca placeholder="Busque vagas de voluntariado ou ONGs" />

        <SocialMedias>
          <a href="https://www.youtube.com/channel/UC5lXqh1Nl2E3RPTX0E9JxCA" target="_blank"><img src="/icons/YouTube.png" alt="global org youtube" /></a>
          <a href="https://www.linkedin.com/company/global-org/" target="_blank"><img src="/icons/LinkedIn.png" alt="global org Linkedin" /></a>
          <a href="https://www.instagram.com/globalorg_/" target="_blank"><img src="/icons/IG.png" alt="global org Instagram" /></a>
          <a href="" target="_blank"><img src="/icons/WPP.png" alt="global org whatsApp" /></a>
          <a href="https://www.facebook.com/globalll.org" target="_blank"><img src="/icons/FB.png" alt="global org FaceBook" /></a>
          <a href="#" target="_blank"><img src="/icons/Twitter.png" alt="global org Twitter" /></a>

        </SocialMedias>
      </HeaderAppBar>
      <SecondaryAppBar position="relative">
        <a> Para empresas  </a>

        <a> Sou um projeto  </a>

        <a> Entrar </a>

        <a> Ajudar  </a>
      </SecondaryAppBar>
    </>
  );
}

export default Header;
