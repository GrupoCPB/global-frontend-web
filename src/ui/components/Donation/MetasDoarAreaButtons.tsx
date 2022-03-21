import { StyledArea } from "../../../styles/donation/MetasDoarAreaButtons.styles";
import BasicButton from "../Buttons/BasicButton";

export default function MetasDoarArea() {
    return (
        <StyledArea>
            <BasicButton
                text='Metas'
                className='metas-button'
                anyStartIcon={<img src='/donation_images/metas-icon.png' alt='metas'></img>}
                variant='contained'
            />

            <img src='/donation_images/dots-icon.png' alt='dots'/>

            <BasicButton
                text='Doar'
                className='doar-button'
                anyStartIcon={<img src='/donation_images/doar-icon.png' alt='doar'></img>}
                variant='contained'
            />
        </StyledArea>
    )
}