import { Container, styled } from "@material-ui/core";

const StyledBanner = styled('div')`
    width: 100%;
    display: flex;
    height: 197px;

    .banner-text {
        width: 100%;
        position: relative;
        display: grid;

        h1 {
            color: ${({theme}) => theme.palette.secondary.light};
            place-self: center end;
            padding-right: 40px;
        }
    }

    .banner-background {
        width: 100%;
    }

    .navigation-path-div {
        position: absolute;
        bottom: 0;
        right: 0;
        background: white;
        padding: 13px 30px 13px 15px;
        border-top-left-radius: 8px;
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