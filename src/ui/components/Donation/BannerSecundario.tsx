import { StyledBanner } from "../../../styles/donation/Banner.styles"

export default function Banner() {
    return (
        <StyledBanner>
            <div className='banner-text'>
                <h1>Transparência</h1>
            </div>

            <div className='banner-background'>
                <img src='/donation_images/banner2_image.png' />
            </div>
        </StyledBanner>
    )
}