import { StyledArea } from "../../../styles/donation/MetasDoarAreaButtons.styles";
import { Button } from "@material-ui/core";

export default function MetasDoarArea() {
    return (
        <StyledArea>
            <Button
                className='metas-button'
                startIcon={<img src='/donation_images/metas-icon.png' alt='metas'></img>}
                variant='contained'
            >
                Metas
            </Button>

            <img src='/donation_images/dots-icon.png' alt='dots' />

            <Button
                className='doar-button'
                startIcon={<img src='/donation_images/doar-icon.png' alt='doar'></img>}
                variant='contained'
            >
                Doar
            </Button>
        </StyledArea >
    )
}