import { LabelPadrao } from './InputPadrao.styles';

type InputProps = {
    type?: string,
    maxLength?: number,
    label?: string,
    icon?: boolean,
    required?: boolean,
    input_id?: string,
    textField?: boolean
}

export default function InputPadrao(props: InputProps) {
    if (props.textField) {
        return (
            <LabelPadrao className={props.icon ? 'hasIcon' : 'noIcon'}>
                <span>{props.required ? '*' : ''}{props.label}</span>
                <textarea rows={5} maxLength={props.maxLength} id={props.input_id || ''}/>
            </LabelPadrao>
        )
    }
    return (
        <LabelPadrao className={props.icon ? 'hasIcon' : 'noIcon'}>
            <span>{props.required ? '*' : ''}{props.label}</span>
            <input type={props.type} maxLength={props.maxLength} id={props.input_id || ''}/>
        </LabelPadrao>
    )
}
