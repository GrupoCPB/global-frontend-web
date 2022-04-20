import { StyledSecondaryBanner } from "../../../styles/donation/SecondaryBanner.styles";
import { Container } from "@material-ui/core";

type SecondaryBannerProps = {
    titulo: String,
    hrefAttr: String
}

export default function SecondaryBanner({ titulo, hrefAttr }: SecondaryBannerProps) {
    return (
        <StyledSecondaryBanner>
            <Container className='secondary-banner-container'>
                <div className='banner-text'>
                    <h1>{titulo}</h1>
                </div>

                <div className='banner-background' style={{ backgroundImage: `url(${hrefAttr})` }} />
            </Container>
        </StyledSecondaryBanner>
    )
}