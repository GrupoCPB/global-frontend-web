import { experimentalStyled as styled } from '@material-ui/core/styles';
import { Box, Container } from '@material-ui/core';

export const FooterMUI = styled("footer")`

`

export const BoxMUI = styled(Box)`
    background-color: #F0F5F7;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    padding: 100px;
    font-family: Merriweather;
    color: ${({ theme }) => theme.palette.text.secondary};
    column-gap: 50px;

    
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
        color: ${({ theme }) => theme.palette.text.secondary};
    }


    ${({ theme }) => theme.breakpoints.down('md')}{
        grid-template-columns: repeat(1, 1fr);
        padding: 10px;
     }
`

export const Title = styled("h3")`
    font-weight: 700;
    font-size: 24px;
    font-style: normal;
    line-height: 36px;
    letter-spacing: -0.44px;
    display: flex;
    margin: 0;

    h3 {
        margin: 0;
        padding: 0;
        display: inline;
    }
`

export const Info = styled(Box)`
    display: flex;
    flex-direction: column;

    img {
        width: 32px;
        height: 32px;
        margin-right: 10px;
        display: inline;
    }

    div:nth-of-type(3) {
        background-color: red;
    }
`

export const Contato = styled(Box)`

`

export const Nav = styled(Box)`

`

export const News = styled(Box)`
    form {
        input {
            margin: 5px 0;
            font-size: 14px;
            border-radius: 5px;
            border: solid 1px ${({ theme }) => theme.palette.text.secondary};
            padding: 5px 2px;
            background: transparent;
        }

        button {
            width: 178px;
            height: 40px;
            padding: 5px 2px;background: #7A0E48;
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
    background: ${({ theme }) => theme.palette.primary.dark};
    height: 78px;
    display: flex;
    align-items: center;
    justify-content: space-around;
    flex-direction: row;
    flex-wrap: wrap;

    span {
        font-size: 16px;
        font-weight: 500;
        color: white;
    }

    ${({ theme }) => theme.breakpoints.down('md')}{

  

         span {
            font-size: 12px;
        font-weight: 500;
        color: white;
    }
     }
`