import { SelectStyled } from './InputSelect.styles';

export default function SelectSocialMedia() {
    return(
        <SelectStyled>
            <span>Rede Social: </span>
            <select className='selectSocialMedia'>
                <option value=''> </option>
                <option value='Facebook'>Facebook</option>
                <option value='Instagram'>Instagram</option>
                <option value='WhatsApp'>WhatsApp</option>
            </select>
        </SelectStyled>
    )
}