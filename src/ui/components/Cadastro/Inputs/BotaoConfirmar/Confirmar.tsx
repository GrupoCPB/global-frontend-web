import { MouseEventHandler } from 'react';
import { EventHandler } from 'react';
import { ConfirmarStyles } from './Confirmar.styles';

type BotaoConfirmar = {
    label: string,
    function?: MouseEventHandler
}

export default function Confirmar(props: BotaoConfirmar) {
    return (
        <ConfirmarStyles>{props.label}</ConfirmarStyles>
    )
}