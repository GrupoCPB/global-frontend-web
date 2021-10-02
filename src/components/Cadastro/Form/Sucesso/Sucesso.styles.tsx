import { styled } from '@material-ui/core';
import { Template } from '../FormSections/FormSections.styles';

export const SuccessStyles = styled(Template)`
    padding-top: 20px;
    border-radius: 6px 6px 6px 6px;
    overflow-y: visible;
    position: relative;
    width: 100%;
    
    div {
        background: url('/amico.png');
        background-size: 50%;
        background-repeat: no-repeat;
        background-position: center;
        height: 100%;
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: bottom;

        button {
            border: 1px solid;
            border-radius: 6px;
            height: 48px;
            width: 225px;
            font-size: 18px;
            letter-spacing: 0.5px;
            font-weight: normal;
            margin: 70% 20px 0;
        }

        button:first-of-type {
            background: rgba(0,0,0,0);
            border-color: #520B31;
            color: #520B31;
        }

        button:last-of-type {
            background: #520B31;
            border-color: #520B31;
            color: white;
        }
    }
`