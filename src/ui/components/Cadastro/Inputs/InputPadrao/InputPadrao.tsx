import { InputHTMLAttributes } from 'react';
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
    section?: string
}


export default function InputPadrao(props: InputProps) {
    if (props.textField) {
        return (
            <LabelPadrao className={props.icon ? 'hasIcon' : 'noIcon'}>
                <span>{props.required ? '*' : ''}{props.label}</span>
                <textarea rows={5} maxLength={Number(props.maxLength) || 500} id={props.input_id || ''} className={props.section}/>
            </LabelPadrao>
        )
    }

    if (props.type === 'number') {
        return (
            <LabelPadrao className={props.icon ? 'hasIcon' : 'noIcon'}>
                <span>{props.required ? '*' : ''}{props.label}</span>
                <input type={props.type} maxLength={Number(props.maxLength) || 120} minLength={Number(props.minLength) || 1} id={props.input_id || ''} required={props.required ? true : false} className={props.section}/>
            </LabelPadrao>
        )
    }

    return (
        <LabelPadrao className={props.icon ? 'hasIcon' : 'noIcon'}>
            <span>{props.required ? '*' : ''}{props.label}</span>
            <input type={props.type} maxLength={Number(props.maxLength) || 120} minLength={Number(props.minLength) || 1} id={props.input_id || ''} required={props.required ? true : false} className={props.section}/>
        </LabelPadrao>
    )
}
