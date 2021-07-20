import { styled } from '@material-ui/core';

export const Tabs = styled('div')`
    display: flex;
    width: 100%;
    justify-content: space-between;
    background: #520B3190;

    div {
        display: grid;
        place-items: center;
        padding: 15px 25px;
        height: 50px;
        width: 17%;
        text-align: center;
        border-radius: 8px 8px 0 0;
        background: rgba(237, 237, 237, 1);
        z-index; -1;
        box-shadow: 3px -4.3px 5px rgba(0, 0, 0, 0.25);
    }

    .active {
        background: white;
    }
`