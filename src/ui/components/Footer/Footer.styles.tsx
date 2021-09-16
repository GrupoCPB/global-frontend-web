import { experimentalStyled as styled } from '@material-ui/core/styles';
import { Box } from '@material-ui/core';

const BoxPadrao = styled(Box)`
    padding: 0 15px;

    @media(max-width: 1000px) {
        margin: 50px 0;
    }
`

export const FooterMUI = styled("footer")`

`

export const BoxMUI = styled(Box)`
    background-color: #F0F5F7;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    padding: 100px;
    font-family: Merriweather;
    color: ${({theme}) => theme.palette.text.secondary};

    @media(max-width: 1000px) {
        display: flex;
        flex-direction: column;
        text-align: center;
    }

    ul {
        list-style-type: none;
        padding: 0;

        li {
            margin: 12px 0;
        }
    }

    p {
        margin: 12px 0;
        font-size: 16px;
        font-weight: 400;
        line-height: 21px;
    }
    
    a {
        text-decoration: none;
        color: ${({theme}) => theme.palette.text.secondary};
    }
`

export const Title = styled("div")`
    font-weight: 700;
    font-size: 24px;
    font-style: normal;
    line-height: 36px;
    letter-spacing: -0.44px;
    display: flex;
    margin: 0;
    background: rgba(0,0,0,0);

    h3 {
        margin: 0;
        padding: 0;
        display: inline;

        @media(max-width: 1000px) {
            display: block;
            width: 100%;
            text-align: center;
        }

    }

    img {
        width: 32px;
        height: 32px;
        margin-right: 10px;
        display: inline;

        @media(max-width: 1000px) {
            :first-of-type {
                margin-right: -30px;
            }
        }
    }
`

export const Info = styled(BoxPadrao)`
    display: flex;
    flex-direction: column;

    a {
        margin: 0 6px;
    }

`

export const Contato = styled(BoxPadrao)`

`

export const Nav = styled(BoxPadrao)`

`

export const News = styled(BoxPadrao)`
    form {
        input {
            margin: 5px 0;
            font-size: 14px;
            border-radius: 5px;
            border: solid 1px ${({theme}) => theme.palette.text.secondary};
            padding: 5px 2px;
            background: transparent;
        }

        button {
            width: 178px;
            height: 40px;
            padding: 5px 2px;
            background: #7A0E48;
            border: none;
            box-shadow: 0px 4px 14px rgba(0, 0, 0, 0.2);
            border-radius: 8px;
            color: white;
            font-weight: 500;
            font-size: 16px;
            margin-top: 15px;
        }
    }
`

export const LowerSocialMedia = styled("div")`
    margin: 10px 0;
    a {
        img {
            filter: invert(22%) sepia(79%) saturate(2323%) hue-rotate(181deg) brightness(94%) contrast(97%);
            width: 25px;
            height: 25px;
        }
    }
` 

export const LowerBar = styled("div")`
    background: ${({theme}) => theme.palette.primary.dark};
    height: auto;
    display: flex;
    align-items: center;
    justify-content: space-between;

    span {
        font-size: 16px;
        font-weight: 500;
        color: white;
        margin: 0 95px;
    }

    @media(max-width: 1000px) {
        flex-direction: column;
        text-align: center;

        span {
            margin: 10px 0;
            text-align: center;
        }
    }
`