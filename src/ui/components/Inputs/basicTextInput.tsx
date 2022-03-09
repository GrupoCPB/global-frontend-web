import { styled } from '@material-ui/core/styles';

export const BasicTextInputStyle = styled('label')`
    display: flex;
    flex-direction: column;
    margin-top: 25px;
    width: auto;

    span {
        font-family: Open Sans;
        font-size: 16px;
        font-style: normal;
        font-weight: 700;
    }

    input {
        background: #FFFFFF;
        border: 1px solid rgba(140, 138, 151, 0.7);
        box-sizing: border-box;
        border-radius: 4px;
        height: 2.5rem;
        margin-top: 3px;
        font-size: 20px;
        padding-left: 10px;
    }

    input:focus {
        outline: solid 2px #11709E;
    }
`

export default function BasicTextInput({ type, title, required }) {
    return (
        <>
            <BasicTextInputStyle>
                <span>{title}</span>
                <input type={type} required={required} />
            </BasicTextInputStyle>
        </>
    )
}