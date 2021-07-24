import { FormStyles } from './FormStyles.styles';
import { useState } from 'react';
import { styled } from '@material-ui/core';
import FormTabs from './FormTabs/FormTabs';
import Slider from './FormSlider/Slider';
import Confirmar from '../Inputs/BotaoConfirmar/Confirmar';
import { AcessoComponent, ContatoComponent, InfoGeralComponent, SobreComponent } from './FormSections/FormSections';

const Wrapper = styled('div')`
    width: 65%;
    margin: auto;
    height: auto;
    box-shadow: 10 10px 10px rgba(0, 0, 0, 0.25);
    display: flex;
    flex-direction: column;
    align-content: center;
    background-color: white;
    border-radius: 0 0 6px 6px;
    padding-bottom: 50px;
`;

export default function Form() {
    const [state, setState] = useState({
        formSection: 0,
        formData: {
            nome: null,
            cnpj: null,
            telefone: null,
            resumo: null,
            foto: null,
            endereco: null,
            cep: null,
            estado: null,
            cidade: null,
            causa: null,
            site: null,
            email: null,
            redesocial1: [null, null],
            redesocial2: [null, null]
        }
    })

    function confirmData() {
        let regexes = {
            nome: /([a-ã-]| )+/gi,
            cnpj: /\d{14}/,
            telefone: /\d{11}/,
            cep: /\d{8}/,
        };

        let todosInputs = Array.from(document.querySelectorAll('#form input, select, textarea'))

        let inputsObrigatorios = Array.from(document.querySelectorAll('input[required]'));

        let inputObrigatorioVazio = inputsObrigatorios.find(el => {
            if ((el as HTMLInputElement).value === '') {
                return el
            }
        })

        if (inputObrigatorioVazio) {
            setState({
                ...state,
                formSection: Number(inputObrigatorioVazio.className.slice(7, 8))
            })
    
            document.getElementById(`${inputObrigatorioVazio.className}`).scrollIntoView({ block: 'center', inline: 'center' }) //scroll ate o input invalido
        }

        //falta checar os inputs com os regex antes de envia-los para o state

    }

    function goToFirstSection() {
        setState({
            ...state,
            formSection: 0
        })

        document.getElementById('section0').scrollIntoView({ block: 'center', inline: 'center' })
    }

    function goNextSection(ev) {
        ev.preventDefault();
        let sections = ['section0', 'section1', 'section2', 'section3'].map(el => document.getElementById(el));

        setState({
            ...state,
            formSection: state.formSection === 3 ? 3 : state.formSection + 1
        })

        sections[state.formSection === 3 ? 3 : state.formSection + 1].scrollIntoView({ block: 'center', inline: 'center' })
    }

    return (
        <Wrapper>
            <FormTabs goToFirstSection={goToFirstSection} formSection={state.formSection}/>
            <FormStyles id='form'>
                <AcessoComponent key={0} goNext={goNextSection} section={0} />
                <InfoGeralComponent key={1} section={1} />
                <SobreComponent key={2} section={2} />
                <ContatoComponent key={3} section={3} />
            </FormStyles>
            <div id='confirm_slide'>
                <Confirmar formSection={state.formSection} goNext={goNextSection} confirmData={confirmData}/>
                <Slider formSection={state.formSection}/>
            </div>
        </Wrapper>
    )
}