import { styled } from '@material-ui/core';

export const FotoLabel = styled('label')`
    height: 100%; 
    display: flex;
    flex-direction: column;
    text-align: center;
    align-content: right;
    
    span {
        margin-top: 15px;
        margin-bottom: 4px;
        font-weight: 600;
    }

    #img_display {
        display: block;
        width: 100%;
        height: 60%;
        margin: 0 auto;
        background: #FFFFFF;
        border: 1px solid #000000;
        box-sizing: border-box;
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
        border-radius: 6px;
    }

    button {
        margin: 14px auto -4px;
        border: 2px solid #520B31;
        border-radius: 6px;
        background: #FFFFFF;
        width: 100%;
        height: 38px;
        color: #520B31;
        font-weight: 500;

    }
`