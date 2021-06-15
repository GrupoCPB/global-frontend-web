import React from 'react'
import { HeaderAppBar, HeaderLogo, SecondaryAppBar, InputBusca, SocialMedias } from './Header.styles';
import { Toolbar } from '@material-ui/core'

function Header() {
    return (
        <>
            <HeaderAppBar position={'relative'}>

                <HeaderLogo src={'/img/logo.png'} alt={'Globall org'} />


                <InputBusca placeholder="Busque vagas de voluntariado ou ONGs" />

                <SocialMedias>
                    <a href="#"><img src={'/icons/YouTube.png'} alt=""></img></a>
                    <a href="#"><img src={'/icons/LinkedIn.png'} alt=""></img></a>
                    <a href="#"><img src={'/icons/IG.png'} alt=""></img></a>
                    <a href="#"><img src={'/icons/WPP.png'} alt=""></img></a>
                    <a href="#"><img src={'/icons/FB.png'} alt=""></img></a>
                    <a href="#"><img src={'/icons/Twitter.png'} alt=""></img></a>

                </SocialMedias>
            </HeaderAppBar>
            <SecondaryAppBar position={'relative'} >
                <a> Para empresas  </a>

                <a> Sou um projeto  </a>

                <a> Entrar </a>

                <a> Ajudar  </a>
            </SecondaryAppBar>
        </>
    )
}

export default Header