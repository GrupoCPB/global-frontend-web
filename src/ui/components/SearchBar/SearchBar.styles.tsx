import { styled } from '@material-ui/core/styles';

export const Wrapper = styled('div')`
    &::before {
        content: '';
        width: 20px;
        height: 30px;
        background-image: url('./icons/lupaSearchBar.png');
        background-size: contain;
        background-repeat: no-repeat;

        position: absolute;
        left: 120px;
        top: 12px;
        z-index: 22;
    }
`;

export const SearchBarInput = styled('input')`
    min-width: 270px;
    background: #F0F5F7;
    border: 0.8px solid #3D98C4;
    font-size: 15px;
    font-weight: 200;
    border-radius: 25px;
    height: 30px;
    padding: 0 0 0 40px;
    margin: 0 0 0 20px;

    &:focus {
        color: #495057;
        background-color: #fff;
        border-color: #80bdff;
        outline: 0;
        box-shadow: 0 0 0 0.2rem rgb(0 123 255 / 25%);
    }
`;
