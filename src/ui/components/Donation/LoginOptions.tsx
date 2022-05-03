import { Menu, MenuItem, Button, Grid, styled } from '@material-ui/core';
import { useState } from 'react';

const StyledMenu = styled(Menu)`
    .MuiList-padding {
        padding: 0;
    }

    .MuiMenuItem-root:hover {
        background-color: ${({theme}) => theme.palette.secondary.main}
    }

    .MuiGrid-item {
        max-width: 100%;
    }
`

export default function LoginOptions() {
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <div>
            <Button
                id="basic-button"
                aria-controls={open ? 'basic-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClick}
                endIcon={<img src='/donation_images/arrow_down.png' />}
                sx={{ color: '#5c5b5b', fontWeight: 600, fontSize: '15px' }}
            >
                Login
            </Button>
            <StyledMenu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'left',
                }}
            >
                <Grid item columns={2}>
                    <Grid item xs={2}>
                        <MenuItem onClick={handleClose}>
                            Sou empresa
                        </MenuItem>
                    </Grid>

                    <Grid item xs={2}>

                        <MenuItem onClick={handleClose}>
                            Sou instituição
                        </MenuItem>
                    </Grid>

                    <Grid item xs={1}>
                        <MenuItem onClick={handleClose}>
                            Sou doador
                        </MenuItem>
                    </Grid>
                </Grid>
            </StyledMenu>
        </div>
    );
}