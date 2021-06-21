import { experimentalStyled as styled } from '@material-ui/core/styles';



export const HeaderInfo = styled('div')`
width:723px;
display:flex;

margin:22px;

background-color: ${({ theme }) => theme.palette.grey[50]};

img{
   height:200px;
   width:200px;
   
   background-size:cover;
   background-position:center;
}

.info-area{
   margin:0 35px;

   
}

`;

export const ButtonInfo = styled('button')`
width:200px;
height:40px;

margin:13px;

font-family: Open Sans;
font-weight: bold;
font-size: 1rem;

color: ${({ theme }) => theme.palette.secondary.main};

border-radius:8px;
border: 1px solid #7A0E48;

transition: all ease 0.25s;

&:hover,
&:focus{
   color:#FAFAFA;
   background-color:${({ theme }) => theme.palette.secondary.main};
   border: 1px solid #FAFAFA;
}

`;