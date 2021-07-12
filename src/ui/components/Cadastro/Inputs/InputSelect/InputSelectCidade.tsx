import axios from "axios"
import { useEffect, useState } from "react"
import { SelectStyled } from "./InputSelect.styles"

type SelectProps = {
    label: string,
    estado_id: number
}

export default function SelectEstados(props: SelectProps) {
    const [state, setState] = useState({
        cidades: [],

    })

    async function getCidades() {
        let data = await axios.get((`https://servicodados.ibge.gov.br/api/v1/localidades/estados/${props.estado_id}/municipios`))
        .then(res => res)

        setState({
            ...state,
            cidades: data.data
        })
    }

    useEffect(() => {
        getCidades()
    }, [props.estado_id])

    return(
        <SelectStyled>
            <span>{props.label}</span>
            <select>
            {state.cidades.map(el => {
                return (
                    <option key={el.id} id={el.id} value={el.id}>{el.nome}</option>
                )
            })}
            </select>
        </SelectStyled>
    )
}