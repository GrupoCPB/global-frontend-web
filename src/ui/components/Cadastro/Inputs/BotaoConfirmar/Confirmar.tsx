import { ReactEventHandler } from 'react';
import { EventHandler, useState } from 'react';
import { ConfirmarStyles } from './Confirmar.styles';

type BotaoConfirmar = {
    formSection: number
    goNext: any,
    confirmData: Function
}

export default function Confirmar(props: BotaoConfirmar) {
    if (props.formSection === 0) {
        return null
    }
    
    return (
        <ConfirmarStyles type='button' onClick={props.goNext}>{props.formSection === 3 ? 'Finalizar' : 'Confirmar dados'}</ConfirmarStyles>
    )
}