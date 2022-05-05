import { Grid } from '@material-ui/core';
import { useState, useEffect } from 'react';

export default function SeletorIdioma() {
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
            <Grid
                container
                columns={10}
                alignItems={'center'}
                justifyContent={'space-evenly'}
                height={'100%'}
            >
                <Grid item xs={'auto'}>
                    <img src='/donation_images/united-states.png' />
                </Grid>

                {
                    width > 1000 ?
                        <>
                            <Grid item xs={1}>
                                <span>English</span>
                            </Grid>
                        </>

                        :

                        null
                }


            </Grid>
        </>

    )
}