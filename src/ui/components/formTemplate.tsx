import { styled } from '@material-ui/core/styles';

export const Form = styled('form')`
    width: 80%;
    padding: 50px;
    box-sizing: border-box;
    height: auto;
    display: flex;
    flex-direction: column;

    a {
        color: rgba(31, 142, 196, 1);
    }

    button {
        background: rgba(225, 135, 183, 1);
        font-family: Merriweather;
        font-size: 16px;
        font-weight: 700;
        color: #965176;
        text-align: center;
        border-radius: 4px;
        border: none;
        height: 38px;
        margin-top: 25px;
        cursor: pointer;
    }
`;