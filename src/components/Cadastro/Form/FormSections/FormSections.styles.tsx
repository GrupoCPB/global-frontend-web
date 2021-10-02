import { styled } from '@material-ui/core';

export const Template = styled('div')`
    width: 100%;
    background: white;
    display: flex;
    flex-direction: column;
    align-content: center;
    flex: none;
    position: relative;
    
    h2 {
        font-family: Merriweather;
        font-style: normal;
        font-weight: bold;
        font-size: 28px;
        line-height: 35px;
        text-align: center;
        padding: 45px 0 0 0;
        margin: 0 0 -150px 0;
    }

    .form {
        width: 60%;
        margin: auto;
        
    }

    button {
        cursor: pointer;
    }

`

export const Acesso = styled(Template)`
    text-align: center;
    display: flex;
    flex-direction: column;
    padding-bottom: 10%;
    border-radius: 0 0 10px 10px;

    #global_logo {
        width: 60px;
        display: block;
        margin: 60px auto 5px auto;
    }

    h2, p {
        margin: 10px auto;
        width: 50%;
    }

    p {
        margin: 10px auto 20px auto;
    }

    button {
        display: flex;
        align-items: center;
        text-align: center;
        margin: 7px auto;
        height: 55px;
        width: 333px;
        border-radius: 5px;
        border: none;
        font-size: 15.8px;
        color: white;
        font-weight: 500;
        box-shadow: 0px 3.8px 3.8px 0px rgba(0, 0, 0, 0.25);


        img {
            width: 60px;
            flex-shrink: 1;
            display: inline;
            margin: 0;
            padding: 0;
        }
    }

    #mail_button {
        color: black;
        border: solid 2px black;
        img {
            transform: scale(0.7);
        }
    }

    #fb_button {
        background-color: #3B5998;
        img {
            transform: scale(0.68);
        }
    }

    #g_button {
        background-color: #4885ED;
        img {
            transform: scale(0.5);
            background: white;
            padding: 7px;
            border-radius: 8px;
            margin-left: -7px;
        }
    }
`;

export const InfoGeral = styled(Template)`
    .form {
        #cima {
            display: grid;
            grid-template-columns: 70% 5% 25%;
        }   
    }
`;

export const Sobre = styled(Template)`
    #section2selects {
        div:first-of-type, div:last-of-type {
            display: grid;
            grid-template-columns: 60% 5% 35%;
        }
    }
`;

export const Contato = styled(Template)`
    .form {
        #selects {
            div {
                display: grid;
                grid-template-columns: 60% 5% 35%;
                place-items: none;
            }
        }
    }
`;