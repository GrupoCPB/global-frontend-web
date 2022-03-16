import { TextField, InputAdornment, styled } from "@material-ui/core";
import theme from "../../themes/theme";

const StyledTextField = styled(TextField)`
    fieldset {
        border: none;
    }

    button {
        background: none;
        border: none;
        cursor: pointer;
    }
`

export default function RelatorioTextInput() {
    function erase() {
        const input = document.querySelector('.MuiInputBase-input') as HTMLInputElement;
        input.value = '';
    }

    return (
        <StyledTextField
            size='small'
            sx={{ m: 0, width: '40ch', borderRadius: '4px' }}
            placeholder='Busque por nome ou código'
            InputProps={{
                startAdornment: <InputAdornment position="start">
                    <img src='/donation_images/search_bar_lupa.png' />
                </InputAdornment>,
                endAdornment: <InputAdornment position="end">
                    <button onClick={erase}>
                        <img src='/donation_images/search_bar_close.png' />
                    </button>
                </InputAdornment>,
                sx: { padding: '5px 10px', background: theme.palette.grey['50'] }
            }}
        />
    )
}