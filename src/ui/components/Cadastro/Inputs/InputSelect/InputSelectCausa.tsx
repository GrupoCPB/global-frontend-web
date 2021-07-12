import { SelectStyled } from './InputSelect.styles';

export default function SelectCausa() {
    return(
        <SelectStyled>
            <span>Causa</span>
            <select>
                <option>Causa 1</option>
                <option>Causa 2</option>
                <option>Causa 3</option>
            </select>
        </SelectStyled>
    )
}