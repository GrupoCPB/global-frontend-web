import * as React from 'react';
import { Button } from '@material-ui/core';
import { ClickAwayListener } from '@material-ui/core';
import { Grow } from '@material-ui/core';
import { Paper } from '@material-ui/core';
import { Popper } from '@material-ui/core';
import { MenuItem, Menu } from '@material-ui/core';
import { MenuList } from '@material-ui/core';
import { Grid } from '@material-ui/core';
import { Stack } from '@material-ui/core';
import LoginOptions from '../LoginOptions';

export default function HeaderNav() {
    const [open, setOpen] = React.useState(false);
    const anchorRef = React.useRef<HTMLButtonElement>(null);

    const handleToggle = () => {
        setOpen((prevOpen) => !prevOpen);
    };

    const handleClose = (event: Event | React.SyntheticEvent) => {
        if (
            anchorRef.current &&
            anchorRef.current.contains(event.target as HTMLElement)
        ) {
            return;
        }

        setOpen(false);
    };

    function handleListKeyDown(event: React.KeyboardEvent) {
        if (event.key === 'Tab') {
            event.preventDefault();
            setOpen(false);
        } else if (event.key === 'Escape') {
            setOpen(false);
        }
    }

    const prevOpen = React.useRef(open);

    React.useEffect(() => {
        if (prevOpen.current === true && open === false) {
            anchorRef.current!.focus();
        }

        prevOpen.current = open;
    }, [open]);

    const [width, setWidth] = React.useState(0)

    function watchResize(ev) {
        setWidth(ev.target.innerWidth)

    }

    React.useEffect(() => {
        setWidth(window.innerWidth)
    }, [])

    React.useEffect(() => {
        window.addEventListener('resize', watchResize)
    }, [])

    if (width > 1000) {
        return (
            <Grid container item columns={10}>
                <Grid item xs={'auto'} sm={'auto'} md={'auto'} lg={'auto'}>
                    <MenuList>
                        <MenuItem>Doação</MenuItem>
                        <MenuItem>Plataformas</MenuItem>
                        <MenuItem>Contato</MenuItem>
                        <MenuItem>Serviços</MenuItem>
                    </MenuList>

                </Grid>

            </Grid>
        )
    }

    return (
        <div>
            <Button
                ref={anchorRef}
                id="composition-button"
                aria-controls={open ? 'composition-menu' : undefined}
                aria-expanded={open ? 'true' : undefined}
                aria-haspopup="true"
                onClick={handleToggle}
            >
                Menu
            </Button>
            <Popper
                open={open}
                anchorEl={anchorRef.current}
                role={undefined}
                placement="auto"
                transition
                disablePortal
            >
                {({ TransitionProps }) => (
                    <Grow
                        {...TransitionProps}
                        style={{
                            transformOrigin: 'top',
                        }}
                    >
                        <Paper>
                            <ClickAwayListener onClickAway={handleClose}>
                                <MenuList
                                    autoFocusItem={open}
                                    id="composition-menu"
                                    aria-labelledby="composition-button"
                                    onKeyDown={handleListKeyDown}
                                    sx={{ flexDirection: 'column', alignItems: 'center' }}
                                >
                                    <MenuItem onClick={handleClose}>Doação</MenuItem>
                                    <MenuItem onClick={handleClose}>Plataformas</MenuItem>
                                    <MenuItem onClick={handleClose}>Contato</MenuItem>
                                    <MenuItem onClick={handleClose}>Serviços</MenuItem>
                                    <MenuItem onClick={handleClose}>Login</MenuItem>

                                    <Button
                                        className='variant-contained'
                                        variant='contained'
                                        color='secondary'
                                    >
                                        Seja um doador
                                    </Button>

                                </MenuList>
                            </ClickAwayListener>
                        </Paper>
                    </Grow>
                )}
            </Popper>
        </div>
    );
}