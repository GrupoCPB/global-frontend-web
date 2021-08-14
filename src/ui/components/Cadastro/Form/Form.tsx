import { FormStyles } from './FormStyles.styles';
import { useEffect, useState } from 'react';
import { styled } from '@material-ui/core';
import FormTabs from './FormTabs/FormTabs';
import ConfirmSlider from './ConfirmSlider/ConfirmSlider';
import Success from './Sucesso/Sucesso';
import { AcessoComponent, ContatoComponent, InfoGeralComponent, SobreComponent } from './FormSections/FormSections';

const Wrapper = styled('div')`
    width: 65%;
    margin: auto;
    height: auto;
    box-shadow: 10 10px 10px rgba(0, 0, 0, 0.25);
    display: flex;
    flex-direction: column;
    align-content: center;
    padding-bottom: 50px;

    .invalidInput {
        border: solid 3px red;
        outline: none;
    }
`;

export default function Form() {
    const [state, setState] = useState({
        formSection: 0,
        formData: {
            nome: null,
            cnpj: null,
            telefone: null,
            foto: null,
            resumo: null,
            endereco: null,
            cep: null,
            cidade: null,
            estado: null,
            causa: null,
            site: null,
            email: null,
            redesocial1: [null, null],
            redesocial2: [null, null]
        },
        form: () => document.querySelector('#form'),
        sectWidth: () => document.querySelector('#wrapper').clientWidth,
        todosInputs: () => Array.from(document.querySelectorAll('#form input, select, textarea')),
        inputsObrigatorios: () => Array.from(document.querySelectorAll('input[required]')),
        inputObrigatorioVazio: () => state.inputsObrigatorios().find(el => {
            if ((el as HTMLInputElement).value === '') {
                return el
            }
        }),
        sessaoDoInputObrigatorioVazio: () => Number(state.inputObrigatorioVazio().className.slice(7, 8)),
        anyInvalid: () => state.todosInputs().find((el: HTMLInputElement) => {
            if (el.classList.contains('invalidInput') || (el.value === '' && el.required)) {
                return el
            } else {
                return false
            }
        })
    })

    function goToSectionByTab(ev) {
        let daVez = Number(ev.target.id.slice(3, 4))
        setState({
            ...state,
            formSection: daVez
        })

        state.form().scrollTo(state.sectWidth()*daVez, 0)
    }

    function goNextSection(ev) {
        ev.preventDefault();

        setState({
            ...state,
            formSection: state.formSection === 3 ? 3 : state.formSection + 1
        })

        state.form().scrollTo(state.sectWidth() * (state.formSection === 3 ? 3 : state.formSection + 1), 0)
    }

    function scrollToInvalidInput(section:number, inputInvalido = state.inputObrigatorioVazio()) {
        setState({
            ...state,
            formSection: section
        })

        state.form().scrollTo(state.sectWidth() * section, 0)

        //se o input vazio for o da imagem
        if (inputInvalido.id === 'hiddenFileInput') {
            document.querySelector('#img_display').classList.add('invalidInput');
        }
    }

    function confirmData() {
        if (state.anyInvalid()) {
            scrollToInvalidInput(Number(state.anyInvalid().className.slice(7, 8)), state.anyInvalid())

            state.anyInvalid().classList.contains('invalidInput') ? null : state.anyInvalid().classList.add('invalidInput')
            
        } else {
            setState({
                ...state,
                formSection: 4,
                formData: {
                    nome: (state.todosInputs()[0] as HTMLInputElement).value,
                    cnpj: (state.todosInputs()[1] as HTMLInputElement).value,
                    telefone: (state.todosInputs()[2] as HTMLInputElement).value,
                    foto: (state.todosInputs()[3] as HTMLInputElement).value,
                    resumo: (state.todosInputs()[4] as HTMLInputElement).value,
                    endereco: (state.todosInputs()[5] as HTMLInputElement).value,
                    cep: (state.todosInputs()[6] as HTMLInputElement).value,
                    cidade: (state.todosInputs()[7] as HTMLInputElement).value,
                    estado: (state.todosInputs()[8] as HTMLInputElement).value,
                    causa: (state.todosInputs()[9] as HTMLInputElement).value,
                    site: (state.todosInputs()[10] as HTMLInputElement).value,
                    email: (state.todosInputs()[11] as HTMLInputElement).value,
                    redesocial1: [(state.todosInputs()[12] as HTMLInputElement).value, (state.todosInputs()[13] as HTMLInputElement).value],
                    redesocial2: [(state.todosInputs()[14] as HTMLInputElement).value, (state.todosInputs()[15] as HTMLInputElement).value]
                }
            })

            state.form().scrollTo(state.sectWidth()*4, 0)
        }
        //falta enviar o state para o servidor
    }

    useEffect(() => {
        window.onresize = () => {
            document.getElementById(`section${state.formSection}`).scrollIntoView()
        }
    })

    return (
        <Wrapper id='wrapper'>
            <FormTabs goToSectionByTab={goToSectionByTab} formSection={state.formSection} />
            <FormStyles id='form'>
                <AcessoComponent key={0} goNext={goNextSection} section={0} />
                <InfoGeralComponent key={1} section={1} />
                <SobreComponent key={2} section={2} />
                <ContatoComponent key={3} section={3} />
                <Success key={4} section={4}/>
            </FormStyles>
            <ConfirmSlider confirmData={confirmData} goNextSection={goNextSection} formSection={state.formSection} />
        </Wrapper>
    )
}