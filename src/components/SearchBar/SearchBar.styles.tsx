import { styled } from '@material-ui/core/styles';

export const SearchBarInput = styled('input')`
    min-width: 270px;
    background: #F0F5F7;
    border: 0.8px solid #3D98C4;
    font-size: 15px;
    font-weight: 200;
    border-radius: 25px;
    height: 30px;
    padding: 0 0 0 15px;
    margin: 0 0 0 35px;

    &:focus {
        color: #495057;
        background-color: #fff;
        border-color: #80bdff;
        outline: 0;
        box-shadow: 0 0 0 0.2rem rgb(0 123 255 / 25%);
    }
`;
