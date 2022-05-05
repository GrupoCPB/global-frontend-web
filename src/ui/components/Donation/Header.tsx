import { Container, Button, Grid } from "@material-ui/core";
import LoginOptions from './LoginOptions';
import { useState, useEffect } from "react";
import HeaderNav from "./IndexPage/HeaderNavigation";
import HeaderTopBar from "./HeaderTopBar";


export default function DonationHeader() {
    const [width, setWidth] = useState(0)

    function watchResize(ev) {
        setWidth(ev.target.innerWidth)
    }

    useEffect(() => {
        setWidth(window.innerWidth)
    }, [])

    useEffect(() => {
        window.addEventListener('resize', watchResize)
    }, [])

    return (
        <>
            <Container maxWidth={false} disableGutters>
                <HeaderTopBar />
            </Container>

            <Container>
                <Grid container columns={12} justifyContent={`${width > 1000 ? 'space-between' : 'space-around'}`} alignItems={'center'} padding='20px 0'>
                    <Grid item xs={'auto'} sm={'auto'} md={'auto'} lg={'auto'}>
                        <img src='/donation_images/donation_logo2.png' />
                    </Grid>

                    <Grid container item xs={'auto'} sm={'auto'} md={'auto'} lg={'auto'}>
                        <HeaderNav />
                    </Grid>

                    {
                        width > 1000 ?
                            <>
                                <Grid item xs={'auto'} sm={'auto'} md={'auto'} lg={'auto'}>
                                    <LoginOptions />
                                </Grid>

                                <Grid item xs={'auto'} sm={'auto'} md={'auto'} lg={'auto'}>
                                    <Button
                                        className='variant-contained'
                                        variant='contained'
                                        color='secondary'
                                    >
                                        Seja um doador
                                    </Button>
                                </Grid>
                            </>

                            :

                            null
                    }

                </Grid>
            </Container>
        </>
    )
}