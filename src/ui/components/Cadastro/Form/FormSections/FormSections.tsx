import axios from "axios";
import React, { useState, useEffect } from "react";
import InputPadrao from "../../Inputs/InputPadrao/InputPadrao";
import InputFoto from "../../Inputs/InputFoto/InputFoto";
import Slider from "../FormSlider/Slider";
import Confirmar from "../../Inputs/BotaoConfirmar/Confirmar";
import SelectEstados from "../../Inputs/InputSelect/InputSelectEstado";
import SelectCidades from "../../Inputs/InputSelect/InputSelectCidade";
import SelectCausa from "../../Inputs/InputSelect/InputSelectCausa";
import SelectSocialMedia from "../../Inputs/InputSelect/InputSelectSocialMedia";
import { Acesso, Contato, InfoGeral, Sobre } from "./FormSections.styles";


export function AcessoComponent(props) {
    return (
        <Acesso id='section0'>
            <img src='/img/logo.png'></img>
            <h2>Crie uma conta na Global ORG para sua ONG ou Empresa</h2>
            <p>Divulgue suas vagas de voluntariado, tenha acesso às nossas ferramentas de gestão e faça parte da comunidade Global ORG</p>

            <button id='mail_button'>
                <img src='/icons/cadastroIcons/mail_icon.png'></img>
                Continuar com Email
            </button>

            <button id='fb_button'>
                <img src='/icons/cadastroIcons/fb_icon.png'></img>
                Continuar com Facebook
            </button>

            <button id='g_button'>
                <img src='/icons/cadastroIcons/g_icon.png'></img>
                Continuar com Google
            </button>
        </Acesso>
    )
}

export function InfoGeralComponent(props) {
    return (
        <InfoGeral id='section1'>
            <h2>Vai ser rápido! Vamos lá?</h2>
            <form>
                <div id='cima'>
                    <div id='cima1'>
                        <InputPadrao type='text' label='Nome' required icon={true} input_id='nome' maxLength={100}/>
                        <InputPadrao type='number' label='CNPJ' icon={true} input_id='cnpj' maxLength={14}/>
                        <InputPadrao type='number' label='Telefone para contato' icon={true} input_id='telefone' maxLength={12}/>
                    </div>

                    <span></span>{/*para funcionar as colunas no css*/}

                    <div id='cima2'>
                        <InputFoto label='Foto da ONG:' required/>
                    </div>
                </div>

                <div id='baixo'>
                    <InputPadrao textField={true} label='Resumo' icon={true} maxLength={500} input_id='resumo'/>
                </div>
                <span id='warning'style={{color: "rgba(64, 64, 64, 1)", fontSize: 12, }}>Todos os campos marcados com * são obrigatórios.</span>
            </form>

            <div id='confirmaSlide'>
                <Confirmar label='Confirmar dados'/>
                <Slider section={props.section}/>
            </div>
        </InfoGeral>
    )
}

export function SobreComponent(props) {
    const [state, setState] = useState({
        estado_id: 11,
    })

    function setEstado(novo_estado) {
        setState({estado_id: novo_estado})
    }

    return (
        <Sobre id='section2'>
            <h2>Só mais alguns dados...</h2>
            <form>
                <div>
                    <InputPadrao icon={true} label='Endereço:' required maxLength={120} input_id='endereço'/>
                </div>

                <div id='section2selects'>
                    <div>
                        <InputPadrao icon={true} label='CEP:' required maxLength={8}/>
                        <span></span>
                        <SelectCidades label='Cidade' estado_id={state.estado_id}/>
                    </div>
                    <div>
                        <SelectEstados label='Estado' setEstado={setEstado}/>
                        <span></span>
                        <SelectCausa/>
                    </div>
                </div>
                <span id='warning'style={{color: "rgba(64, 64, 64, 1)", fontSize: 12, }}>Todos os campos marcados com * são obrigatórios.</span>
            </form>

            <div id='confirmaSlide'>
                <Confirmar label='Confirmar dados'/>
                <Slider section={props.section}/>
            </div>
        </Sobre>
    )
}

export function ContatoComponent(props) {
    return (
        <Contato id='section3'>
            <h2>Quase lá!</h2>
            <form>
                <div>
                    <InputPadrao icon={true} input_id='site' label='Site da ONG/projeto:' maxLength={100} required type='text' />
                    <InputPadrao icon={true} input_id='email' label='E-mail:' maxLength={100} required type='text' />
                </div>
                <div id='selects'>
                    <div>
                        <SelectSocialMedia/>
                        <span></span>
                        <InputPadrao icon={false} input_id='link1' label='Link:' maxLength={100} type='text' />
                    </div>
                    <div>
                        <SelectSocialMedia/>
                        <span></span>
                        <InputPadrao icon={false} input_id='link2' label='Link:' maxLength={100} type='text' />
                    </div>
                </div>
                <span id='warning'style={{color: "rgba(64, 64, 64, 1)", fontSize: 12, }}>Todos os campos marcados com * são obrigatórios.</span>
            </form>

            <div id='confirmaSlide'>
                <Confirmar label='Finalizar'/>
                <Slider section={props.section}/>
            </div>
        </Contato>
    )
}