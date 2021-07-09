import {
    AcessoComponent,
    ContatoComponent,
    InfoGeralComponent,
    SobreComponent
} from '../../ui/components/Form/Sections';

import {
    Botao,
    Wrapper,
    Page
} from '../../ui/components/Form/Form.styles';

import React, { useState } from 'react';
import { useEffect } from 'react';


export default function PaginaCadastroONG() {
    const [state, setState] = useState({
        formSection: "0",
        legendas: ["Acesso", "Informações gerais", "Sobre a ONG/projeto", "Contato"],
        formData: {}
    })

    function confirmGoNextSection(ev:React.MouseEvent<HTMLElement>) {
        ev.preventDefault();

        let algum = false;

        //precisa ser atualizada para nao seguir em frente se algum campo obrigatorio nao for preenchido
        //iterar os inputs para verificar se algum está vazio

        let atual = Array.from(document.querySelectorAll('.input'));

        atual.forEach((el:HTMLInputElement) => {
            if (el.id === 'CEP_input' && el.value.length != 8) {
                algum = true;
                window.alert('CEP inválido')
            } else
            if (el.id === 'CEP_input' && (Number(el.value) ? false : true)) {
                algum = true;
                window.alert('CEP inválido')
            } else {
                algum = false;
            }
        })

        if (algum) {
            return
        }

        setState({
            ...state,
            formSection: (Number(state.formSection) + 1).toString()
        })
        
    }

    function Finish() {
        let todos = document.querySelector('input');
        console.log(todos);
    }

    function changeFormSection(ev:React.MouseEvent<HTMLElement>) {
        ev.preventDefault();

        let id = (ev.target as HTMLElement).id;

        setState({
            ...state,
            formSection: id
        })

        let bts = Array.from(document.querySelectorAll('.aba'))

        bts.forEach((el:HTMLElement) => {
            if (el.id === id) {
                el.style.background = "white"
            } else {el.style.background = "rgba(237, 237, 237, 1)"}
        })
    }

    function gerarBotoes(legend:string) {
        let id = state.legendas.indexOf(legend)
        return (
            <>
                <Botao onClick={changeFormSection} className='aba' key={id.toString()} id={id.toString()}><p>{legend}</p></Botao>
            </>
        )
    }

    useEffect(() => {
        let bts = document.querySelectorAll('.aba');
        bts.forEach((el:HTMLElement) => {
            if (el.id === state.formSection) {
                el.style.background = 'white';
            } else {
                el.style.background = 'rgb(237, 237, 237)';
            }
        })
    })

    return (
        <Page>
            <Wrapper>
                <div>
                    {state.legendas.map(el => {
                        return gerarBotoes(el)
                    })}
                </div>

                <div id='sections'>
                    {[<AcessoComponent key={1} section={state.formSection}/>, 
                    <InfoGeralComponent key={2} section={state.formSection} gonext={confirmGoNextSection}/>, 
                    <SobreComponent key={3} section={state.formSection} gonext={confirmGoNextSection}/>, 
                    <ContatoComponent key={4} section={state.formSection} gonext={Finish}/>][state.formSection]}
                </div>
            </Wrapper>
        </Page>

    )
}