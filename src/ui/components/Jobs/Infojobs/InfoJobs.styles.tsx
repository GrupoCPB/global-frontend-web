import { experimentalStyled as styled } from '@material-ui/core/styles';
import theme from '../../../themes/theme';



export const InfoArea = styled('div')`
width:723px;
display:flex;
flex-direction:column;

margin:22px;
border-radius: 0px 12px 12px 0px;

background-color: ${({ theme }) => theme.palette.grey[50]};

`;

export const HeaderInfo = styled('div')`
display:flex;
   img{
      height:200px;
      width:200px;
      
      background-size:cover;
      background-position:center;
   }

   .info-header{
      margin:0 35px;

      h2{
         font-family: Merriweather;
         font-style: bold;
         font-size: 24px;

         color:${({ theme }) => theme.palette.secondary.dark};
      }   

      p{
         font-family: Merriweather;
         font-weight: bold;
         font-size: 18px;
      }

      span{
         font-size:14px;
         color: #969696;
      }
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
transform: translateX(-1rem);

&:hover,
&:focus{
   color:#FAFAFA;
   background-color:${({ theme }) => theme.palette.secondary.main};
   border: 1px solid #FAFAFA;
}

`;


export const MoreInfo = styled('section')`
display:flex;
height:130px;
justify-content:center;


   div{
      width:280px;
      padding-left:31px;

      border-top:1px solid ${({ theme }) => theme.palette.text.primary};
      border-bottom:1px solid ${({ theme }) => theme.palette.text.primary};

      h3{
         font-family: Merriweather;
         font-weight: bold;
         font-size: 18px;
      }

      p{
         font-family: Open Sans;
         font-size: 14px;
      }
      span{
         font-family: Open Sans;
         font-size: 14px;
      }
   }
   
   .right-side{
      border-left:0.2px solid ${({ theme }) => theme.palette.text.primary};
   }

`;
