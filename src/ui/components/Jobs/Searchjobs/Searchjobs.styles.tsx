import { experimentalStyled as styled } from '@material-ui/core/styles';
import { Container, Button} from '@material-ui/core';




export const Image = styled('img')`
    height:62px;
`;

export const SearchArea = styled(Container)`
    width:1100px;
    height:95px;

    display:flex;
    justify-content:center;
    align-items: center;

    gap:1rem;
    border-radius:12px;
    
    background-color: ${({theme}) => theme.palette.grey[100]}
    

`;

export const FormArea = styled('form')`
    
    display:flex;
    gap:1rem;
    
    input{
        height:44px;
        width:389px;

        border-radius:8px;
        border:1px solid #404040;
        background-color:#EDEDED; 

        font-size:1rem;
        font-family: Open Sans;
    } 

`;

export const ButtonSubmit = styled(Button)`
    height:47px;
    width:177px;

    border-radius:8px;
    color:#FFF;
    background-color: ${({ theme }) => theme.palette.secondary.main};


    &:hover{
        background-color:  ${({ theme }) => theme.palette.secondary.main};

        filter:brightness(1.15);
    }

    
`;