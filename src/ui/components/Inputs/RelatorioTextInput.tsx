import { TextField, InputAdornment, styled } from "@material-ui/core";
import theme from "../../themes/theme";

const StyledTextField = styled(TextField)`
    fieldset {
        border: none;
    }
`

export default function RelatorioTextInput() {
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
                    <img src='/donation_images/search_bar_close.png' />
                </InputAdornment>,
                sx: { padding: '5px 10px', background: theme.palette.grey['50'] }
            }}
        />
    )
}