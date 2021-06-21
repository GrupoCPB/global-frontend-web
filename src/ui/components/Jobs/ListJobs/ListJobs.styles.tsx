import { experimentalStyled as styled } from '@material-ui/core/styles';
import { Card, Divider, List } from '@material-ui/core';


export const BodyCard = styled(Card)`
   
`;

export const ListJobsSection = styled(List)`
    max-width: 400px;
    overflow-y: scroll;
     max-height: 500px;

    /* width */
        ::-webkit-scrollbar {
        width: 15px;
    
        }

        /* Track */
        ::-webkit-scrollbar-track {
        box-shadow: black;

        }

        /* Handle */
        ::-webkit-scrollbar-thumb {
        background: ${({ theme }) => theme.palette.secondary.dark};;
        border-radius: 10px;
            height: 8px;
        }

        /* Handle on hover */
        ::-webkit-scrollbar-thumb:hover {
        background: #b30000;
            height: 8px;
        }
`;

export const DividerJobs = styled(Divider)`
`;