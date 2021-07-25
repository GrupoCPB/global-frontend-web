import { styled } from '@material-ui/core';

export const LabelPadrao = styled('label')`
    display: flex;
    flex-direction: column;
    margin-top: 15px;

    span {
        margin-bottom: 4px;
        font-weight: 600;
    }

    input[type=number] {
        &::-webkit-outer-spin-button,
        &::-webkit-inner-spin-button {
        -webkit-appearance: none;
        }
    }

    input, textarea {
        border-radius: 6px;
        border: solid 2px black;
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
        1px solid #000000;
        padding: 5px 3px;
        font-size: 1.1rem; 
    }

    &.hasIcon {
        span:before {
            content: '';
            position: absolute;
            transform: translate(10px, 34px);
            width: 18px;
            height: 18px;
            background-image: url('/icons/cadastroIcons/lapis.svg');
            background-size: contain;
            background-repeat: no-repeat;
        }

        input, textarea {
            padding-left: 40px;
        }

        @keyframes ola {
            0% {
                border: solid 1px red;
            }
            100% {
                border: solid 1px black;
            }
        }

        .invalidInput {
            animation: ola 3s;
        }
    }
`