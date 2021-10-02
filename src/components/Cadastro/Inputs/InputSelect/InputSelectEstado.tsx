import axios from "axios";
import { useEffect, useState } from "react";
import { SelectStyled } from "./InputSelect.styles";

type SelectProps = {
    id?: string,
    label: string,
    setEstado: Function
}

export default function SelectEstados(props: SelectProps) {
    const [state, setState] = useState({
        estados: [],

    })

    async function getEstados() {
        let data = await axios.get('https://servicodados.ibge.gov.br/api/v1/localidades/estados/')
            .then(res => res)

        setState({ ...state, estados: data.data })
    }

    function mudarEstado(ev) {
        props.setEstado(ev.target.value)
    }

    useEffect(() => {
        getEstados()
    }, [])

    return(
        <SelectStyled>
            <span>{props.label}</span>
            <select id='selectEstado' onChange={mudarEstado}>
            {state.estados.map(el => {
                return (
                    <option key={el.id} id={el.id} value={el.id}>{el.nome}</option>
                )
            })}
            </select>
        </SelectStyled>
    )
}