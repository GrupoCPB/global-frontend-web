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

    .invalidInput {
        border: solid 3px red;
        outline: none;
    }
`;

export default function Form({ children }) {
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
        validityState: {
            
        }
    })

    function scrollToInvalidInput(section, inputInvalido = state.inputObrigatorioVazio()) {
        setState({
            ...state,
            formSection: section
        })

        state.form().scrollTo(state.sectWidth()*section, 0)

        //se o input vazio for o da imagem
        if (inputInvalido.id === 'hiddenFileInput') {
            document.querySelector('#img_display').classList.add('invalidInput');
        }
    }

    function confirmData() {
        let anyInvalid = state.todosInputs().find((el:HTMLInputElement) => {
            if (el.classList.contains('invalidInput') || (el.value === '' && el.required)) {
                return el
            } else {
                return false
            }
        });

        let section = Number(anyInvalid.className.slice(7, 8));

        if (anyInvalid) {
            scrollToInvalidInput(section, anyInvalid)
        } else {
            //aqui vai o código caso nenhum input esteja inválido
        }
        
        //     setState({
        //         ...state,
        //         formData: {
        //             nome: (todosInputs[0] as HTMLInputElement).value,
        //             cnpj: (todosInputs[1] as HTMLInputElement).value,
        //             telefone: (todosInputs[2] as HTMLInputElement).value,
        //             foto: (todosInputs[3] as HTMLInputElement).value,
        //             resumo: (todosInputs[4] as HTMLInputElement).value,
        //             endereco: (todosInputs[5] as HTMLInputElement).value,
        //             cep: (todosInputs[6] as HTMLInputElement).value,
        //             cidade: (todosInputs[7] as HTMLInputElement).value,
        //             estado: (todosInputs[8] as HTMLInputElement).value,
        //             causa: (todosInputs[9] as HTMLInputElement).value,
        //             site: (todosInputs[10] as HTMLInputElement).value,
        //             email: (todosInputs[11] as HTMLInputElement).value,
        //             redesocial1: [(todosInputs[12] as HTMLInputElement).value, (todosInputs[13] as HTMLInputElement).value],
        //             redesocial2: [(todosInputs[14] as HTMLInputElement).value, (todosInputs[15] as HTMLInputElement).value]
        //         }
        //     })
        // }
        //falta checar os inputs com os regex antes de envia-los para o state

    }

    function goToFirstSection() {
        setState({
            ...state,
            formSection: 0
        })

        state.form().scrollTo(0, 0)
    }

    function goNextSection(ev) {
        ev.preventDefault();

        setState({
            ...state,
            formSection: state.formSection === 3 ? 3 : state.formSection + 1
        })

        state.form().scrollTo(state.sectWidth() * (state.formSection === 3 ? 3 : state.formSection + 1), 0)
    }

    return (
        <Wrapper id='wrapper'>
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