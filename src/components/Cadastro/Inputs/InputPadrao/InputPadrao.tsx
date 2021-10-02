import { ChangeEvent } from 'react';
import { useState } from 'react';
import { LabelPadrao } from './InputPadrao.styles';

type InputProps = {
    type?: string,
    maxLength?: string,
    minLength?: string,
    label?: string,
    icon?: boolean,
    required?: boolean,
    input_id?: string,
    textField?: boolean,
    section?: string,
    initialValidityValue?: boolean
}

export default function InputPadrao(props:InputProps) {
    const [state, setState] = useState({
        valid: props.initialValidityValue
    })

    function checkInput(ev:ChangeEvent<HTMLInputElement>) {
        if (ev.target.id === 'nome') {
            if (/\d|\.|\,|\=|\[|\]|\{|\}\//.test(ev.target.value) || ev.target.value === '') {
                ev.target.classList.add('invalidInput')
                setState({
                    valid: false
                })
            } else {
                ev.target.classList.remove('invalidInput')
                setState({
                    valid: true
                })
            }
        }

        if (ev.target.id === 'cnpj') {
            if (/[^\d]/.test(ev.target.value) || ev.target.value.length > 14) {
                ev.target.classList.add('invalidInput')
                setState({
                    valid: false
                })
            } else if (ev.target.value.length === 0) {
                ev.target.classList.remove('invalidInput')
                setState({
                    valid: true
                })
            } else {
                ev.target.classList.remove('invalidInput')
                setState({
                    valid: true
                })
            }
        }

        if (ev.target.id === 'cep') {
            if (/[^\d]/.test(ev.target.value) || ev.target.value.length > 8 || ev.target.value.length < 8 || ev.target.value === '') {
                ev.target.classList.add('invalidInput')
                setState({
                    valid: false
                })
            } else {
                ev.target.classList.remove('invalidInput')
                setState({
                    valid: true
                })
            }
        }

        if (ev.target.id === 'telefone') {
            if (/[^\d]/.test(ev.target.value)) {
                ev.target.classList.add('invalidInput')
                setState({
                    valid: false
                })
            } else {
                ev.target.classList.remove('invalidInput')
                setState({
                    valid: true
                })
            }
        }

        if (ev.target.id === 'endereco' || ev.target.id === 'site' || ev.target.id === 'email') {
            if (ev.target.value === '' || /\=|\[|\]|\{|\}/.test(ev.target.value)) {
                ev.target.classList.add('invalidInput')
                setState({
                    valid: false
                })
            } else {
                ev.target.classList.remove('invalidInput')
                setState({
                    valid: true
                })
            }
        }

        if (ev.target.id === 'site') {
            if (ev.target.value === '') {
                ev.target.classList.add('invalidInput')
                setState({
                    valid: false
                })
            } else {
                ev.target.classList.remove('invalidInput')
                setState({
                    valid: true
                })
            }
        }
    }

    if (props.textField) {
        return (
            <LabelPadrao className={props.icon ? 'hasIcon' : 'noIcon'}>
                <span>{props.required ? '*' : ''}{props.label}</span>
                <textarea rows={5} maxLength={Number(props.maxLength) || 500} id={props.input_id || ''} className={props.section}/>
            </LabelPadrao>
        )
    }

    if (props.type === 'text') {
        return (
            <LabelPadrao className={props.icon ? 'hasIcon' : 'noIcon'}>
                <span>{props.required ? '*' : ''}{props.label}</span>
                <input type={props.type} onChange={checkInput} maxLength={Number(props.maxLength) || 120} minLength={Number(props.minLength) || 1} id={props.input_id || ''} required={props.required ? true : false} className={props.section}/>
            </LabelPadrao>
        )
    }

    return (
        <LabelPadrao className={props.icon ? 'hasIcon' : 'noIcon'}>
            <span>{props.required ? '*' : ''}{props.label}</span>
            <input type={props.type} onChange={checkInput} maxLength={Number(props.maxLength) || 120} minLength={Number(props.minLength) || 1} id={props.input_id || ''} required={props.required ? true : false} className={props.section}/>
        </LabelPadrao>
    )
}
