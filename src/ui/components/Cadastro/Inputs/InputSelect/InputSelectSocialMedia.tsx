import { SelectStyled } from './InputSelect.styles';

export default function SelectSocialMedia() {
    return(
        <SelectStyled>
            <span>Rede Social: </span>
            <select id='selectSocialMedia'>
                <option value='Facebook'>Facebook</option>
                <option value='Instagram'>Instagram</option>
                <option value='WhatsApp'>WhatsApp</option>
            </select>
        </SelectStyled>
    )
}