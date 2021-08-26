import { ReactEventHandler } from 'react';
import { EventHandler, useState } from 'react';
import { ConfirmarStyles } from './Confirmar.styles';

type BotaoConfirmar = {
    formSection: number
    goNext: any,
    confirmData: any
}

export default function Confirmar(props: BotaoConfirmar) {
    return (
        <ConfirmarStyles 
            type='button' 
            onClick={props.formSection === 3 ? props.confirmData : props.goNext}
        >
                {props.formSection === 3 ? 'Finalizar' : 'Confirmar dados'}
        </ConfirmarStyles>
    )
}