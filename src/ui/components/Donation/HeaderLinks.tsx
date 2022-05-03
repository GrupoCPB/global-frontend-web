import SocialMediaLinks from "./SocialMediaLinks";
import { Grid, Container } from '@material-ui/core';

export default function HeaderLinks() {
    return (
        <>
            <Grid
                container
                columns={10}
                justifyContent={'end'}
                alignItems={'center'}
                sx={{ borderBottom: 'solid 1px black' }}
            >

                <Grid item xs={2}>
                    <SocialMediaLinks />
                </Grid>

                <Grid
                    item
                    xs={1}
                    sx={{ 
                        placeItems: 'center', 
                        display: 'grid', 
                        gridTemplateColumns: '1fr 1fr',
                        marginRight: '40px'
                    }}
                >
                    <img src='/donation_images/united-states.png' />
                    <p>English</p>
                </Grid>
            </Grid>
        </>

    )
}