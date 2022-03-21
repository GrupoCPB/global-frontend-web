import { styled } from "@material-ui/core";

const StyledBanner = styled('div')`
    width: 100%;
    display: flex;
    height: 197px;
    overflow: hidden;

    .banner-text {
        width: 100%;
        display: grid;
        position: relative;

        h1 {
            color: ${({theme}) => theme.palette.secondary.light};
            width: 100%;
            place-self: center;
            text-align: center;
        }

        &::after {
            content: '';
            position: absolute;
            top: 0;
            right: -7px;
            width: 15px;
            height: 60%;
            background: ${({theme}) => theme.palette.secondary.light};
            border-bottom-left-radius: 150px;
        }
    }

    .banner-background {
        width: 100%;
        z-index: 1;

        img {
            border-bottom-left-radius: 20px;
        }
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
            </div>

            <div className='banner-background'>
                <img src='/donation_images/banner2_image.png' />
            </div>
        </StyledBanner>
    )
}