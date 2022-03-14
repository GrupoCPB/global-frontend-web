import { Checkbox, FormControlLabel } from '@material-ui/core';
import theme from '../../themes/theme';

export default function CheckboxInput({ label }) {
    return (
        <>
            <FormControlLabel

                control={<Checkbox
                    sx={{
                        color: `${theme.palette.secondary.light}`,
                        '&.Mui-checked': {
                            color: `${theme.palette.secondary.light}`
                        }
                    }}

                    size='small'
                />}
                label={label}
            />
        </>
    );
}