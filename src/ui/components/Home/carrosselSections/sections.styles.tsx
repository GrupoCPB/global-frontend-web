import { styled } from '@material-ui/core/styles';

export const DefaultWrapper = styled('div')`
    * {font-family: Merriweather;}

    h1 {
        font-size: 44px;
        font-style: normal;
        font-weight: 600;
        letter-spacing: -1px;
    }

    p {
        font-size: 22;
        font-weight: 300;
    }

    button {
        margin-top: 10px;
        width: 45%;
        padding: 10px 18px;
        border-radius: 4px;
        font-weight: 600;
        border: none;
        cursor: pointer;
    }

    box-sizing: border-box;
    padding: 50px;
    width: 100%;
    flex: none;
    display: grid;
    grid-template-columns: 50% 50%;
    column-gap: 15px;
    place-items: center;
`

export const Sec1Style = styled(DefaultWrapper)`
    background-color: #11709E;
    color: rgba(247, 247, 247, 1);

    button {
        background-color: rgba(161, 35, 102, 1);
        color: rgba(247, 247, 247, 1);
    }
`

export const Sec2Style = styled(DefaultWrapper)`
    color: rgba(52, 50, 62, 1);

    button {
        background: #F7F7F7;
        border: 1px solid #1F8EC4;
        color: rgba(31, 142, 196, 1);
    }
`

export const Sec3Style = styled(DefaultWrapper)`
    color: rgba(247, 247, 247, 1);
    background-color: #11709E;

    button {
        background-color: transparent;
        border: 1px solid #F7F7F7;
        color: #f7f7f7;
    }
`

export const Sec4Style = styled(DefaultWrapper)`
    color: rgba(52, 50, 62, 1);

    button {
        border: 1px solid #1F8EC4;
        color: rgba(31, 142, 196, 1);
        background-color: transparent;
    }
`
export const Sec5Style = styled(DefaultWrapper)`
    color: rgba(247, 247, 247, 1);
    background-color: #7A0E48;

    button {
        background-color: transparent;
        border: 1px solid #F7F7F7;
        color: #f7f7f7;
    }
`