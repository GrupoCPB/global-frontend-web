import { styled } from "@material-ui/core";

const StyledBanner = styled('div')`
    width: 100%;
    display: flex;
    height: 197px;
    overflow: hidden;

    .banner-text {
        width: 100%;
        position: relative;
        padding-left: 100px;
        display: grid;

        h1 {
            color: ${({theme}) => theme.palette.secondary.light};
            width: 100%;
            place-self: center;
        }
    }

    .banner-background {
        width: 100%;
        z-index: 1;
    }

    .navigation-path-div {
        width: 100%;
        position: absolute;
        bottom: 0;
        right: -120px;
        background: white;
        padding: 13px 0 13px 0px;
        border-top-left-radius: 8px;
        z-index: 0;
        padding-left: 20px;
        font-size: 1vw;
    }
`;


export default function Banner() {
    return (
        <StyledBanner>
            <div className='banner-text'>
                <h1>Transparência</h1>
                <div className='navigation-path-div'>
                    <a>Página inicial</a>
                    {' > '}
                    <a>Transparência</a>
                </div>
            </div>

            <div className='banner-background'>
                <img src='/donation_images/banner2_image.png' />
            </div>
        </StyledBanner>
    )
}