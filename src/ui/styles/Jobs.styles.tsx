import { experimentalStyled as styled } from '@material-ui/core/styles';

export const Container = styled('section')`
    height:100vh;
    width:100%;

    display:flex;
    flex-direction:column;
    align-items:center;
    margin:1rem 0;
    padding:1rem 0;
    
    background-color: ${({ theme }) => theme.palette.primary.light};
`;

export const JobsArea = styled('div')`
    padding:1rem 0;
    width:1135px;

    display:inherit;
    align-items: center;
    flex-direction:column; 

    border-radius:12px;

    background-color: ${({ theme }) => theme.palette.primary.dark}
`;

export const JobsResult = styled('section')`
    display:inherit;
    flex-direction:row;
    
    
    
`;

export const JobsInfoArea = styled('div')`
    width:723px;   
    justify-content:center; 
`;
