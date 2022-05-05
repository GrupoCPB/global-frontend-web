import { Container, Box, Grid } from "@material-ui/core"
import SeletorIdioma from "./SeletorIdioma"
import SocialMediaLinks from "./SocialMediaLinks"

export default function HeaderTopBar() {
    return (
            <Box borderBottom={'solid 1px grey'}>
                <Container>
                    <Grid container columns={10} justifyContent='end' alignItems='center'>
                        <Grid item xs={9} sm={3} md={3} lg={3}>
                            <SocialMediaLinks />
                        </Grid>

                        <Grid item xs={1} sm={3} md={2} lg={1}>
                            <SeletorIdioma />
                        </Grid>
                    </Grid>
                </Container>
            </Box>
    )
}